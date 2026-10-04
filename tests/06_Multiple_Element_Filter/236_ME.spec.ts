
import { test, expect, Locator } from '@playwright/test';


test('Basic verify how to handle multiple elements', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    const rightPanelLinksTexts: Locator[] = await page.locator("a.list-group-item").all();
    console.log(rightPanelLinksTexts.length);
    for (const links of rightPanelLinksTexts) {
        console.log(links);
        console.log(await links.getAttribute('href'));
    }
    
    
    
});
