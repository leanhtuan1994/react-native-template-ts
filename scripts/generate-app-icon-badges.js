/* global __dirname */

const { mkdir } = require('node:fs/promises');
const path = require('node:path');

const { addBadge } = require('app-icon-badge');

const {
  createAppIconBadgeConfig,
  getAppIconBadgePaths,
} = require('../app-icon-badge.config');
const { Env } = require('../env');

const projectRoot = path.resolve(__dirname, '..');

async function main() {
  const config = createAppIconBadgeConfig(Env);
  if (!config.enabled) return;
  const outputPaths = getAppIconBadgePaths(Env);

  const jobs = [
    {
      icon: './assets/icon.png',
      destination: outputPaths.icon,
      isAdaptiveIcon: false,
    },
    {
      icon: './assets/adaptive-icon.png',
      destination: outputPaths.adaptiveIcon,
      isAdaptiveIcon: true,
    },
  ];

  for (const job of jobs) {
    const destination = path.resolve(projectRoot, job.destination);
    await mkdir(path.dirname(destination), { recursive: true });
    await addBadge({
      icon: path.resolve(projectRoot, job.icon),
      dstPath: destination,
      badges: config.badges,
      isAdaptiveIcon: job.isAdaptiveIcon,
    });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
