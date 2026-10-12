import { test, expect, Locator, } from '@playwright/test';

test('verify Drag and Drop in Knban Board', async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/dnd");
    // const inProgress = page.locator("[data-status = 'in-progress']");
    // await page.locator("Review PR #21 — flaky test fix").first().dragTo(inProgress);

    let source: Locator = page.locator("#card-write-spec");
    const sourceBox = (await source.boundingBox())!;

    let target: Locator = page.locator('[data-status="review"]');
    const targetBox = (await target.boundingBox())!;

    await page.mouse.move(sourceBox.x + sourceBox.width / 2, sourceBox.y + sourceBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(targetBox.x + targetBox.width / 2, targetBox.y + targetBox.height / 2);
    await page.mouse.up();

    await page.pause();
});