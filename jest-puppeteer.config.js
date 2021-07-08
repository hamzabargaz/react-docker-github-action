module.exports = {
  launch: {
    headless: process.env.HEADLESS === true,
    args: ["--no-sandbox"],
  },
};
