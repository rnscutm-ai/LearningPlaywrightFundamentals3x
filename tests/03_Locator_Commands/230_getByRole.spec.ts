import { test, expect } from "@playwright/test";

test("Verify login katalon app ", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    let mainButton = page.getByRole("link", { name: "Make Appointment", exact: true });
    await mainButton.click();
});