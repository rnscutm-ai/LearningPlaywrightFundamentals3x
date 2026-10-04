import { test, expect, FrameLocator, Locator, ScreenshotMode, } from '@playwright/test';

test('verify Keyboard Press', async ({ page }) => {

    await page.goto("https://www.spicejet.com/");
    const initialURL = page.url();

    await page.getByText("Add-ons", {exact: true}).hover();
    await page.getByText("FlyEarly", {exact: true}).click();
    
    await page.goto("https://corporate.spicejet.com/FLYEarlyProductatAirports.aspx");
    const afterClickedFlyEarly = page.url();
    expect(initialURL).not.toBe(afterClickedFlyEarly);
    
    await page.screenshot({path:"FlyEarly.png"});

});