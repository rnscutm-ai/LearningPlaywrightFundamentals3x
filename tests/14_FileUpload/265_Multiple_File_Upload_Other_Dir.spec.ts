import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('Multiple File Upload - files in another directory', () => {

    const URL = "https://www.patternfly.org/components/file-upload/multiple-file-upload/";

    // the fixtures do NOT sit next to this spec - they live in <project>/testdata,
    // so walk up twice: tests/14_FileUpload -> tests -> project root
    const testDataDir = path.join(__dirname, '..', '..', 'testdata');

    test.beforeEach(async ({ page }) => {
        await page.goto(URL, { waitUntil: "domcontentloaded" });

    });
    test('Upload pdf, jpg and doc from the project testdata folder', async ({ page }) => {
        // should know the path of the files
        const pdf = path.join(testDataDir, 'sample.pdf');
        const jpg = path.join(testDataDir, 'file1.jpg');
        const doc = path.join(testDataDir, 'sample.doc');
        console.log(pdf);
        console.log(jpg);
        console.log(doc);

        const fileInput = page.locator('.pf-v6-c-multiple-file-upload input[type="file"]');
        await fileInput.setInputFiles([pdf, jpg, doc]);

        // PatternFly renders a status item per accepted file
        await expect(page.getByText('sample.pdf')).toBeVisible();
        await expect(page.getByText('file1.jpg')).toBeVisible();
        await expect(page.getByText('sample.doc')).toBeVisible();

    });
});
