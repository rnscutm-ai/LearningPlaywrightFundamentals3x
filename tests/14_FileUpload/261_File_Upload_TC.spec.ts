import { test, expect, Locator, } from '@playwright/test';
import path from 'path';

test.describe('File Upload', () => {

    const URL = "https://app.thetestingacademy.com/playwright/widgets/upload-download";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL,{waitUntil: "domcontentloaded"});

    });
    test('Locate FileUpload and upload', async ({ page }) => {
        // should know the path of the file
        const filePath = path.join(__dirname, 'testdata.txt');
        console.log(filePath);
        // __dirname - current working directory full path
        await page.locator('#single-upload').setInputFiles(filePath);
        await page.pause();

    });
});