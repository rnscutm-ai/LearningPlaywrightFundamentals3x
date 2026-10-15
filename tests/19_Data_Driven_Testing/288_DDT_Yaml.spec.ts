import { test } from '@playwright/test';
import path from 'path';
import { readFileSync } from 'fs';
import yaml from 'js-yaml';

const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';
const rows = yaml.load(readFileSync(path.join(__dirname, 'test-data',
    'login-data.yaml'), 'utf-8')) as any[];

for (const data of rows) {
    test(`Login with : ${data.description}`, async ({ page }) => {
        await page.goto(URL);
        await page.getByRole('textbox', {
            name: 'Email Address'
        }).fill(data.username);
        await page.getByRole('textbox', { name: 'Password' }).fill(data.password);
        await page.getByRole('button', {
            name: 'Login to Practice Account'
        }).click();
    });
}