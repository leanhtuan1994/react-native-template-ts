/**
 * @param {{ APP_ENV: string, VERSION: string }} env
 */
function getAppIconBadgePaths(env) {
  const cacheKey = `${env.APP_ENV}-${env.VERSION}`.replace(
    /[^a-zA-Z0-9.-]/g,
    '-'
  );

  return {
    icon: `./.expo/app-icon-badge/icon-${cacheKey}.png`,
    adaptiveIcon: `./.expo/app-icon-badge/foreground-image-${cacheKey}.png`,
  };
}

/**
 * @param {{ APP_ENV: string, VERSION: string }} env
 * @returns {import('app-icon-badge/types').AppIconBadgeConfig}
 */
function createAppIconBadgeConfig(env) {
  return {
    enabled: env.APP_ENV !== 'production',
    badges: [
      { text: env.APP_ENV, type: 'banner', color: 'white' },
      { text: env.VERSION, type: 'ribbon', color: 'white' },
    ],
  };
}

module.exports = { createAppIconBadgeConfig, getAppIconBadgePaths };
