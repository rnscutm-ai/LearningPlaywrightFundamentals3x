import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Multiple File Upload - pdf, jpg and doc', () => {

    const URL = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL, { waitUntil: "domcontentloaded" });

    });
    test('Upload one pdf, one jpg and one doc', async ({ page }) => {
        // should know the path of the files
        const pdf = path.join(__dirname, 'sample.pdf');
        const jpg = path.join(__dirname, 'file1.jpg');
        const doc = path.join(__dirname, 'sample.doc');
        console.log(pdf);
        console.log(jpg);
        console.log(doc);
        // __dirname - current working directory full path

        // accepted file types on this page: JPEG / Doc / PDF / PNG
        const fileInput = page.locator('.pf-v6-c-multiple-file-upload input[type="file"]');
        await fileInput.setInputFiles([pdf, jpg, doc]);

        // PatternFly renders a status item per accepted file
        await expect(page.getByText('sample.pdf')).toBeVisible();
        await expect(page.getByText('file1.jpg')).toBeVisible();
        await expect(page.getByText('sample.doc')).toBeVisible();

    });
});
