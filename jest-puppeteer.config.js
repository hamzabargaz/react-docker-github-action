module.exports = {
  launch: {
    headless: process.env.HEADLESS === true,
    args: ["--no-sandbox"],
  },
  browser: 'chromium',
  browserContext: 'default',
  server: {
    command: `yarn start`,
    port: 3000,
    launchTimeout: 10000,
    debug: true,
  },
};