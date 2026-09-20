import {test,  expect } from "@playwright/test";

test("Verify login katalon app ", async({page})=>{
await page .goto("https://katalon-demo-cura.herokuapp.com/",{
    waitUntil: 'domcontentloaded',
    timeout: 30000,
    referer: "https://sdet.live"
});

let makeAppointmentButton = page.locator("#btn-make-appointment");
await makeAppointmentButton.click();

let userNameField = page.locator("#txt-username");
let passwordField = page.locator("#txt-password");
let clickLoginButton = page.locator("#btn-login");

await userNameField.fill("John Doe");
await passwordField.fill("ThisIsNotAPassword");
await clickLoginButton.click();

let headerName = page.locator("#appointment h2");
await expect(headerName).toContainText("Make Appointment");

});