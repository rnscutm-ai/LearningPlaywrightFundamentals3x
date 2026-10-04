import { test, expect, FrameLocator, Locator, ScreenshotMode, } from '@playwright/test';

test('verify Drag and Drop', async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/drag_and_drop");
    //page.waitForTimeout(10000);
    page.screenshot({path: "beforeDrag_drop.png"});

    const colA = page.locator("#column-a");
    const colB = page.locator("#column-b");

    await colA.dragTo(colB, {force: true});
    //page.waitForTimeout(10000);
    page.screenshot({path: "afterDrag_drop.png"});

});