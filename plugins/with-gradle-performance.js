const { withGradleProperties } = require('expo/config-plugins');

/**
 * Tunes Gradle for build throughput.
 *
 * An EAS worker runs one build in a throwaway container, so a daemon buys
 * nothing there and only costs memory. Locally the daemon is what keeps JVM
 * warmup and Gradle's caches alive between runs — without it every invocation
 * re-pays the full startup and configuration cost, even for a one-line change.
 */
module.exports = function withGradlePerformance(config) {
  const isEasBuild = !!process.env.EAS_BUILD;

  return withGradleProperties(config, (config) => {
    const newProps = [
      {
        type: 'property',
        key: 'org.gradle.jvmargs',
        // 4 GB leaves headroom for the Kotlin daemon, ninja/clang jobs and
        // Metro on a 16 GB machine.
        value:
          '-Xmx4096m -XX:MaxMetaspaceSize=1024m -XX:+UseG1GC -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8',
      },
      {
        type: 'property',
        key: 'org.gradle.daemon',
        value: String(!isEasBuild),
      },
      {
        type: 'property',
        key: 'org.gradle.parallel',
        value: 'true',
      },
      {
        // Survives `expo prebuild` wiping android/, which matters because the
        // native project is generated (CNG) rather than checked in.
        type: 'property',
        key: 'org.gradle.caching',
        value: 'true',
      },
      {
        type: 'property',
        key: 'kotlin.incremental',
        value: 'true',
      },
    ];

    // Remove existing keys
    const keysToRemove = newProps.map((p) => p.key);
    config.modResults = config.modResults.filter(
      (item) => !keysToRemove.includes(item.key)
    );

    // Add new props
    config.modResults.push(...newProps);

    return config;
  });
};
