import { test, expect, FrameLocator, } from '@playwright/test';

test('verify Advance Custom-Dropdowns', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/frames/");
let vehicalFrame: FrameLocator = page.frameLocator("#frame-one");
await vehicalFrame.locator("#RESULT_TextField-1").fill("Hyundai i10");
await vehicalFrame.locator("#RESULT_TextField-2").fill("Rabi");
await vehicalFrame.locator("#RESULT_TextField-3").fill("2014");
await vehicalFrame.locator("#RESULT_RadioButton-1").selectOption("Hatchback");
await vehicalFrame.locator("#RESULT_TextField-4").fill("2016");
await vehicalFrame.locator("#RESULT_TextArea-1").fill("Amazing car Hyundai i10");
await vehicalFrame.getByText("Submit registration", {exact: true}).click();

let output = await vehicalFrame.locator("#vehicle-output").innerText();
console.log(output);

});