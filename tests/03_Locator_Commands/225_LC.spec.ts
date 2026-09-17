import {test, expect} from '@playwright/test';

test("Verify x", async({page})=>{
await page.goto("https://thetestingacademy.com/playwright/multiple_element_filter/",
{waitUntil: 'commit'}
);
const response = await page.goto("https://thetestingacademy.com/login",{
waitUntil: 'domcontentloaded',
timeout: 45000,
referer: 'https://thetestingacademy.com'
});

});