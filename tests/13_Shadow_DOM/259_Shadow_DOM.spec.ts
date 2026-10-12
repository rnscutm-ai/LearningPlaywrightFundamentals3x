import { test, expect, Locator, } from '@playwright/test';

test.describe('Shadow handling', () => {

    const URL = "https://app.thetestingacademy.com/playwright/widgets/shadow-dom";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });
    test('Locate Shadow DOM and assert visible', async ({ page }) => {
        const card = page.getByTestId('card-account-card');
        await card.locator("input[name='email']").fill("student@gmail.com");
        await card.locator("input[name='password']").fill("pw");
        await card.getByTestId("card-account-submit").click();
        await expect(card.getByTestId('card-account-status')).toContainText('student@gmail.com');

        const cart = page.getByTestId('counter-cart');
        await cart.getByRole('button', {name: 'Increment'}).click();
        await cart.getByRole('button', {name: 'Increment'}).click();
        await expect(card.getByTestId('counter-value')).toHaveText('5');

        page.getByTestId('nested-host');
        await page.getByTestId('card-inside-email').fill('rabindra@gmail.com');
        await page.getByTestId('card-inside-password').fill('rabi123');
        await page.getByTestId('card-inside-submit').click();


        await page.pause();

    });

});
















