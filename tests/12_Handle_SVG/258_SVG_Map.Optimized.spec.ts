import { test, expect, Locator, } from '@playwright/test';

const simpleMaps = "https://simplemaps.com/svg/country/in";

test.describe("SVG Handling", () => {

    test.beforeEach(async ({ page }) => {
        console.log("Before running any Test case!")
        await page.goto(simpleMaps);
    });

    test('Locate SVG root and assert visible', async ({ page }) => {
        const allStates = await page.locator("path").all();

        for (const state of allStates) {
            const className = await state.getAttribute('class');

            if (className) {
                console.log(className);

                if(className.endsWith('OR')){
                await state.click();
                console.log("Clicked on Odissa");
                }
            }
        }

        await page.pause();
    });

});