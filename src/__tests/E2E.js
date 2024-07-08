const puppeteer = require("puppeteer");

describe("Login Form E2E Test", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch({
      headless: true, // Change to false if you want to see the browser actions
      slowMo: 50, // Slow down by 50ms
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    const puppeteer = require("puppeteer");

    describe("Login Form E2E Test", () => {
      let browser;
      let page;

      beforeAll(async () => {
        // Launch a new browser instance before all tests
        browser = await puppeteer.launch({
          headless: true, // Change to false if you want to see the browser actions
          slowMo: 50, // Slow down by 50ms (for demonstration)
        });
        // Create a new page within the browser
        page = await browser.newPage();
      });

      afterAll(async () => {
        // Close the browser instance after all tests
        await browser.close();
      });

      test("should login successfully with correct credentials", async () => {
        // Navigate to the login page (adjust URL to your local server)
        await page.goto("http://localhost:3000");

        // Type username and password, then click submit
        await page.type("#username", "user");
        await page.type("#password", "password");
        await page.click('button[type="submit"]');

        // Wait for the welcome message to appear
        await page.waitForSelector("h2");

        // Get the text content of the welcome message
        const welcomeMessage = await page.$eval("h2", (el) => el.textContent);
        // Expect the welcome message to be 'Welcome, user!'
        expect(welcomeMessage).toBe("Welcome, user!");
      });

      test("should not login with incorrect credentials", async () => {
        // Navigate to the login page (adjust URL to your local server)
        await page.goto("http://localhost:3000");

        // Type incorrect username and password, then click submit
        await page.type("#username", "wronguser");
        await page.type("#password", "wrongpassword");
        await page.click('button[type="submit"]');

        // Check if the welcome message element does not exist
        const welcomeMessage = await page.$("h2");
        expect(welcomeMessage).toBeNull(); // Ensure the welcome message does not appear
      });
    });

    await browser.close();
  });

  test("should login successfully with correct credentials", async () => {
    await page.goto("http://localhost:3000"); // Adjust the URL to your local server

    await page.type("#username", "user");
    await page.type("#password", "password");
    await page.click('button[type="submit"]');

    await page.waitForSelector("h2"); // Wait for the welcome message to appear

    const welcomeMessage = await page.$eval("h2", (el) => el.textContent);
    expect(welcomeMessage).toBe("Welcome, user!");
  });

  test("should not login with incorrect credentials", async () => {
    await page.goto("http://localhost:3000"); // Adjust the URL to your local server

    await page.type("#username", "wronguser");
    await page.type("#password", "wrongpassword");
    await page.click('button[type="submit"]');

    const welcomeMessage = await page.$("h2");
    expect(welcomeMessage).toBeNull(); // Ensure the welcome message does not appear
  });
});
