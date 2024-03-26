import type { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests/',
  timeout: 30 * 1000,
  fullyParallel: true,
  expect: {
    timeout: 1000
  },
  use:{
          headless: true,
          browserName: 'chromium',
          viewport: { width: 1920, height: 1080 },
          baseURL: 'https://demo.nopcommerce.com',
          screenshot: 'only-on-failure',
          trace:'on'
        },
};
export default config;

