import { test,  expect } from "@playwright/test";

test.describe('Login page', ()=>{    // group tests

    test('valid credentials', async({page})=>{
await page.goto("https://thetestingacademy.com/playwright/");
    });

    test('invalid password',async({page})=>{
await page.goto("https://thetestingacademy.com/playwright/");
    });

    test.skip('Checkout with paypal', async({page})=>{
    // never executes
});

});
// npx playwright test -g "Login page"