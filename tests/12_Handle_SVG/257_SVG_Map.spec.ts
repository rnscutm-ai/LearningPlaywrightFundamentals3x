import { test, expect, Locator, } from '@playwright/test';

const simpleMaps = "https://simplemaps.com/svg/country/in";

test.describe("SVG Handling", () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Test case!")
        await page.goto(simpleMaps);
    });

    test('Locate SVG root and assert visible', async ({ page }) => {
        const states = await page.locator("//div[@id='admin1_map_inner']//*[name()='svg']//*[name()='path' and contains(@class,'sm_state')]").all();

        for (const state of states) {
            const classState = await state.getAttribute('class');
            console.log(classState);

            if (classState?.includes("INOR")) {
                await state.click();
            }
        }

        await page.pause();
    });

});