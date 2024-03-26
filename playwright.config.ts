import { PlaywrightTestConfig, defineConfig } from '@playwright/test';

const isUITest = true; // Assuming isUITest is defined somewhere in your code

const config: PlaywrightTestConfig = defineConfig({
  testDir: isUITest ? './tests/ui/tests' : './tests/api/tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  use: {
    headless: true,
    browserName: 'chromium',
    baseURL: isUITest ? 'https://demo.nopcommerce.com/' : 'https://api.example.com',
    screenshot: 'only-on-failure',
    trace: 'on'
  }
});

export default config;
