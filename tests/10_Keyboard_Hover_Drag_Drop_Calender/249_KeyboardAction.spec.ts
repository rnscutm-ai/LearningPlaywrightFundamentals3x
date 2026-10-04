import { test, expect, FrameLocator, Locator, } from '@playwright/test';

test('verify Keyboard Press', async ({ page }) => {

    await page.goto("https://www.toptal.com/developers/keycode");
    await page.keyboard.press("A");
    await page.screenshot({path: 'A.png'});

    await page.keyboard.press("ArrowLeft");
    await page.screenshot({path: 'ArrowLeft.png'});

    await page.keyboard.press("Shift+o");
    await page.screenshot({path: 'O.png'});

    await page.keyboard.press("Shift");
    await page.screenshot({path: 'Shift.png'});



});