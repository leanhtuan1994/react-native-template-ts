import type { ConfigContext } from '@expo/config';

import createConfig from './app.config';

describe('app icon configuration', () => {
  it('uses the unbadged source icons', () => {
    const config = createConfig({ config: {} } as ConfigContext);

    expect(config.icon).toBe('./assets/icon.png');
    expect(config.android?.adaptiveIcon?.foregroundImage).toBe(
      './assets/adaptive-icon.png'
    );
  });
});
