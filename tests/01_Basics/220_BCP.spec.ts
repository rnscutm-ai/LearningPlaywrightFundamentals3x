import { chromium, Browser, BrowserContext, Page } from "playwright";
async function run() {

    // Level 1 - Launch the browser-heaviest operation - do it once per test suite
let browser: Browser = await chromium.launch({ headless: false });
console.log("Browser launched", browser);

// Level 2 - Create a new browser context - light operation - do it per test
let context: BrowserContext = await browser.newContext();
console.log("Browser context created", context);

// Level 3 - Create a new page in the context - light operation - do it per test
let page: Page = await context.newPage();
console.log("New page created", page);

// Cleanup - Close the page, context, and browser - reverse order of creation - do it once per test suite
await page.close();
console.log("Page closed");
await context.close();
console.log("Context closed");
await browser.close();
console.log("Browser closed");

}