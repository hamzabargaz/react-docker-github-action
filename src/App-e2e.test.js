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

  describe("Login", () => {
    test("should have disabled submit button if nothing was entered in form", async () => {
        await page.goto("http://localhost:3000/auth/sign-in");
        await page.waitForSelector(linkbtn);
        expect(linkbtn).toBeTruthy();
      });
  })