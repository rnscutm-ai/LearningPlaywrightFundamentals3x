import { test, expect } from '@playwright/test';


test.describe('Expect Assertions', () => {

    const URL = "https://app.thetestingacademy.com/playwright/multiple_element_filter";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });
    test('Expect assertions', async ({ page }) => {

        const heading =page.getByText('multiple_element_filter',{exact: true});
        await expect(heading).toBeVisible();
        await expect(heading).toHaveText('multiple_element_filter');
        await expect(heading).toContainText('filter',{timeout: 5000});
        
        const email = page.getByRole('textbox',{name: 'Email Address'});
        await expect(email).toHaveAttribute('id','email');
        await expect(email).toHaveAttribute('placeholder','student@thetestingacademy.com');
        await expect(email).toHaveAttribute('type','email');
        
        const footerLinks = page.locator('footer a');
        await expect(footerLinks).toHaveCount(16);
     
    });
});
