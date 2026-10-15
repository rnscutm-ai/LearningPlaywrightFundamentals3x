import { test, expect } from '@playwright/test';


test.describe('Scroll to Element- Testing Academy', () => {

    const URL = "https://app.thetestingacademy.com/playwright/widgets/scroll";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });
    test('scroll to view', async ({ page }) => {

        // 1st way
        await page.getByTestId('deep-anchor').scrollIntoViewIfNeeded();
        await page.getByTestId('deep-anchor').click();

        // 2nd - JS execute
        await page.evaluate(() => window.scrollBy(0, 1000));

        // 3rd - Jump to bottom
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

        // 4th - Jump to top
        await page.evaluate(() => window.scrollTo(0, 0));
    });
});
