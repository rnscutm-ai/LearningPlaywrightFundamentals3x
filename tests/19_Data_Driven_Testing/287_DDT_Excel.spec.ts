
import { test } from '@playwright/test';
import path from 'path';
import ExcelJS from 'exceljs';

const XLSX = path.join(__dirname, 'test-data', 'login-data.xlsx');
const URL = 'https://app.thetestingacademy.com/playwright/multiple_element_filter';

test('login with every row from the spreadsheet', async ({ page }) => {
    const wb = new ExcelJS.Workbook();
    await wb.xlsx.readFile(XLSX);
    const sheet = wb.getWorksheet('LoginData')!;

    const headers = sheet.getRow(1).values as any[];   // 1-indexed
    for (let i = 2; i <= sheet.rowCount; i++) {
        const cells = sheet.getRow(i).values as any[];

        await page.goto(URL);
        await page.getByRole('textbox', {
            name: 'Email Address'
        }).fill(String(cells[headers.indexOf('username')]));
        await page.getByRole('textbox', {
            name: 'Password'
        }).fill(String(cells[headers.indexOf('password')]));
        await page.getByRole('button', {
            name: 'Login to Practice Account'
        }).click();
    }
});