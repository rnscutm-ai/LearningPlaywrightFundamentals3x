import { test, expect, Locator, } from '@playwright/test';
import path from 'path';

test.describe('File Upload', () => {

    const URL = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL,{waitUntil: "domcontentloaded"});

    });
    test('Locate Multiple FileUpload and upload', async ({ page }) => {
        // should know the path of the file
        const filePath = path.join(__dirname, 'testdata.txt');
        console.log(filePath);
        // __dirname - current working directory full path
        await page.locator('div.pf-v6-c-multiple-file-upload__title').setInputFiles(
            [{
                name: 'file1.jpg',
                mimeType: 'image/jpg',
                buffer: Buffer.from('image from thetestingacademy code')
            },
            {
                name: 'file2.jpg',
                mimeType: 'image/jpg',
                buffer: Buffer.from('this is test')
            }

            ]);
           // await page.locator('.pf-v6-c-button.pf-m-secondary').click();
        await page.pause();

    });
});