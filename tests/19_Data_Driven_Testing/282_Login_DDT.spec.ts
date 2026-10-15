import{test, expect} from '@playwright/test';
import LoginData from './test-data/Login.json';

test.describe('Data Driven Testing - Login Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

    });
    test('Verify Login with Valid Credentials', async ({ page }) => {
        await page.fill('#email', LoginData.validUser.email);
        await page.fill('#password', LoginData.validUser.password);
        await page.getByTestId('login-button').click();
       
    });
    test('Verify Login with Invalid Credentials', async ({ page }) => {
        await page.fill('#email', LoginData.invalidUser.email);
        await page.fill('#password', LoginData.invalidUser.password);
        await page.getByTestId('login-button').click();

});
});
