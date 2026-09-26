import {test, expect} from '@playwright/test';
// load the saved session

test.use(
    {

        storageState: "user-session.json"
});
test("go directly to dashboard-Test1",async({page})=>{

    await page.goto("")
});
