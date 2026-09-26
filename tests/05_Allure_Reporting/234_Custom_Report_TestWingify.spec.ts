

import {test, expect} from '@playwright/test';
// load the saved session

test.use(
    {

        storageState: "user-session.json"
});

test.setTimeout(90000);
test("go directly to dashboard-Test1",async({page})=>{

    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281877", {
        waitUntil: 'domcontentloaded'
    });
    await expect(page).toHaveURL(/dashboard/);
    console.log("dashboard loaded - no login needed");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard-Test2",async({page})=>{

    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281877", {
        waitUntil: 'domcontentloaded'
    });
    await expect(page).toHaveURL(/dashboard/);
    console.log("dashboard loaded - no login needed");
    await page.waitForTimeout(3000);
});

test("go directly to dashboard-Test3",async({page})=>{

    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281877", {
        waitUntil: 'domcontentloaded'
    });
    await expect(page).toHaveURL(/dashboard/);
    console.log("dashboard loaded - no login needed");
    await page.waitForTimeout(3000);
});
