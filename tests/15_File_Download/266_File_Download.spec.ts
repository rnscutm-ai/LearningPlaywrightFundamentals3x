import { test, expect } from '@playwright/test';


test.describe('File download demo', () => {

    const URL = "https://app.thetestingacademy.com/playwright/widgets/upload-download";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });
    test('Demo: Download setInputFiles', async({page})=>{

        const [staticDownload] = await Promise.all([
            page.waitForEvent('download'),
           await page.getByTestId('download-static').click()
        ]);
        await staticDownload.saveAs('./out/' + staticDownload.suggestedFilename());
    });
});
