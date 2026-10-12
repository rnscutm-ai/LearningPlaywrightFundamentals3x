import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Multiple File Upload from disk', () => {

    const URL = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL, { waitUntil: "domcontentloaded" });

    });
    test('Upload file1.jpg and file2.jpg from the test directory', async ({ page }) => {
        // should know the path of the files
        const file1 = path.join(__dirname, 'file1.jpg');
        const file2 = path.join(__dirname, 'file2.jpg');
        console.log(file1);
        console.log(file2);
        // __dirname - current working directory full path

        // the real <input type="file" multiple> sits inside the upload container,
        // not inside the __title div
        const fileInput = page.locator('.pf-v6-c-multiple-file-upload input[type="file"]');
        await fileInput.setInputFiles([file1, file2]);

        // PatternFly renders a status item per accepted file
        await expect(page.getByText('file1.jpg')).toBeVisible();
        await expect(page.getByText('file2.jpg')).toBeVisible();
        await page.pause();
    });
});

