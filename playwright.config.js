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
      use: { ...devices['Desktop Chrome'] },
      storageState: 'state.json',
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      storageState: 'state.json',
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      storageState: 'state.json',
    },
  ],
});
