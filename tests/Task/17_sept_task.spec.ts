import {test,expect} from '@playwright/test';

test("Verify url after login application using dummy data", async({page})=>{

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
const initial_URL = page.url();

let student_Login_Email_field = page.locator("#email");
await student_Login_Email_field.fill("agfgh@gmail.com");

let student_Login_Password_field = page.locator("#password");
await student_Login_Password_field.fill("vcv");

let remember_Checkbox = await page.locator("//input[@name='remember']");
await remember_Checkbox.click();

let sumbit_button = await page.locator(".login-btn").first();
await sumbit_button.click();

await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter?email=xvhgxv%40hfhf.com&password=hgfhs&remember=yes#login-success");
const after_Login_URL = page.url(); 

expect (initial_URL).not.toBe(after_Login_URL);



});