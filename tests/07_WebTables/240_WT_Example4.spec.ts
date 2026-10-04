import { test, expect, } from '@playwright/test';


test('verify Rohan.Mehta checked from employee directory', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/webtable");
    //await page.locator("//td[text()='Rohan.Mehta']/preceding-sibling::td/input").click();

    await page.locator("tr:has(td:text('Rohan.Mehta'))")
    .locator('input')
    .first()
    .click();

});
