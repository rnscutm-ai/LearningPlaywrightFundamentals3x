import {test, expect} from '@playwright/test';

test("tc#1 verify that the vwo page is loaded", async({page})=>{
await page .goto("https://app.wingify.com",{
    waitUntil: 'domcontentloaded',
    timeout: 30000,
    referer: "https://sdet.live"
});

// Default locators
// id, name, className, Tag, custom locator(via CSS selector)
// CSS.selector - Browser -  CSS engine, help you to find the element
// by using the default locators
// id => #id
// name => [name="value"]
// Tag => [tag]
// className => .

// <input type="email" 
// class="text-input W(100%)" 
// name="username" 
// vwo-html-translate-attr="placeholder" 
// vwo-html-translate-placeholder="login:enterEmailID" 
// id="login-username" 
// data-qa="hocewoqisi" 
// placeholder="Enter email ID">

let userNameField = page.locator("#login-username"); // locator doesnot return any promise so no await is required.
let passwordField = page.locator("#login-password");
let signInButton = page.locator("#js-login-btn");

await userNameField.fill("abc@gmail.com");
await passwordField.fill("adsfsf");
await signInButton.click();

let errorMessage = page.locator("#js-notification-box-msg");
await expect(errorMessage).toContainText("Your email, password, IP address or location did not match");
//await page.pause();

//await page.waitForTimeout(5000);




});
