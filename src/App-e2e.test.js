const puppeteer = require("puppeteer");

let browser;
let page;

const linkbtn = '[data-test-id="link-react"]';

beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true,
    //   devtools: true,
      // slowMo: 150,
      args: ["--no-sandbox", "--disable-web-security"],
    });
    // page = await browser.newPage();
    page = (await browser.pages())[0];
    jest.setTimeout(20000);
  });

  afterAll(async () => {
    browser.close();
  });

  describe("check link", () => {
    test("check text inside link", async () => {
        await page.goto("http://localhost:3001/");
        await page.waitForSelector(linkbtn);
        expect(linkbtn).toBeTruthy();
      });
  })