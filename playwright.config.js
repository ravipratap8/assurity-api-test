// playwright.config.js (ESM version)
export default {
  testDir: './tests',
  use: {
    baseURL: 'https://api.tmsandbox.co.nz/',
  },
  timeout: 30000,
  retries: 0,
  reporter: 'list',
};
