import { test, expect, Locator } from '@playwright/test';


test('Basic verify how to handle multiple elements', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    const forgottonPasswordLink = page.locator('a.list-group-item')
    .filter({hasText: 'Forgotton Password'});
    await forgottonPasswordLink.click();

    const privacyLink = page.locator('footer a')
    .filter({hasText: 'Privacy Policy'});

    await expect(privacyLink).toHaveAttribute('href','#privacy-policy');

});
