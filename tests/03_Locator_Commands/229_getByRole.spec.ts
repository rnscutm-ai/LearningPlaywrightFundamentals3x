import { test, expect } from '@playwright/test';

test("Verify the error message in wingify free trial", async ({ page }) => {

    await page.goto("https://app.wingify.com/#/login");
let userName = page.getByRole("textbox",{name:'Email'});
let password = page.getByRole("textbox",{name:'Password'});

await userName.fill("hgxhgx@gmail.com");
await password.fill("shvcjh");
// await page.waitForTimeout(500000);
// await page.pause();


});