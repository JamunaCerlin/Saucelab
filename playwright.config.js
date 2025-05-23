import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  retries: 1,
  reporter: [
    ['html'],
    ['allure-playwright']
  ],

  globalSetup: 'globalSetup.js/global-setup.js', 

  use: {
    baseURL: 'https://rahulshettyacademy.com/client',
    storageState: 'state.json', 
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        browserName:'chromium',
        //channel:'chrome',
        video: 'on',
        trace: 'on',
        screenshot:'only-on-failure',
      },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
