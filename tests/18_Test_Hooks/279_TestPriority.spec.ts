import { test, expect } from '@playwright/test';

test('TCO1- Login should work with valid credentials', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});
test('TCO2- Dashboard should open successfully', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});

test.describe.configure({ mode: 'serial' });

test('Priority 1- Login Test', async ({ page }) => {
    await page.goto('https://app.vwo.com');
    console.log('Login Test');
});

test('Priority 2- Dashboard Test', async ({ page }) => {
    await page.goto('https://app.vwo.com');
    console.log('Dashboard Test');
});

test('Priority 3- Logout Test', async ({ page }) => {
    await page.goto('https://app.vwo.com');
    console.log('Logout Test');
});

test('Login Test @p1 @smoke', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});
test('Profile Test @p2 @regression', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});
test('Settings Test @p3', async ({ page }) => {
    await page.goto('https://app.vwo.com');
});
