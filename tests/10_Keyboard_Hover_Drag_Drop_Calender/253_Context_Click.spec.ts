import { test, expect, FrameLocator, Locator, ScreenshotMode, } from '@playwright/test';

test('verify Context Click', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/context-menu");

    await page.locator("[data-testid='ctx-target']").click({ button: 'right' });

    const allOptions: string[] = await page
        .locator("ul.context-menu-list span")
        .allInnerTexts();
    console.log(allOptions);

    await page.getByText("Copy", { exact: true }).first().click();

});