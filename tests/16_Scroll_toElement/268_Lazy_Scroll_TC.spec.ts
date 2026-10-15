import { test, expect } from '@playwright/test';


test.describe('Scroll to Element- Testing Academy', () => {

    const URL = "https://app.thetestingacademy.com/playwright/widgets/scroll";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });
    test('scroll to view', async ({ page }) => {

        // 5th way - lazy scroll
        await page.getByTestId('section-lazy').scrollIntoViewIfNeeded();
        await page.getByTestId('lazy-list').scrollIntoViewIfNeeded();

        const list = page.getByTestId('lazy-list').locator('li');
        const initialCount = await list.count();
        await page.waitForTimeout(2000);
        // scroll the last existing item into view- item 11 doesnot exist yet
        // so nth(10) would just wait until the test timeout

        await list.last().scrollIntoViewIfNeeded();

        await expect.poll(async () => await list.count(), {
            message: 'expected count > 10',
            timeout: 5000,
        }).toBeGreaterThan(initialCount);

        const finalCount = await list.count();
        console.log(`Initial Count: ${initialCount}, Final Count: ${finalCount}`);

        await page.waitForTimeout(2000);
        //await page.pause();


    });
});
