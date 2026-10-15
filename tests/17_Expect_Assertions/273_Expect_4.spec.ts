import { test, expect } from '@playwright/test';

test('Visible Enabled disabled checked', async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/tables/practice.html");

    const automationCheckbox = page.getByRole('checkbox', { name: '/UFT/' });
    await automationCheckbox.check();
    await expect(automationCheckbox).not.toBeChecked();

    const submissionButton = page.getByTestId('profile-submit'); 
    await expect(submissionButton).toBeEnabled();
    await expect(submissionButton).toBeVisible();

    await expect(page).toHaveTitle(/QA Profile/);
    
    const appURL =page.url();
    expect(appURL).toContain('thetestingacademy');


});

