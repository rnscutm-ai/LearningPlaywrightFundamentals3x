import { test, expect} from '@playwright/test';

test('Verify TC for webTable Example2', async({page})=>{
await page.goto("https://awesomeqa.com/webtable1.html");

const rows =  page.locator('table[summary="Sample Table"] tbody tr');
const rowCount = await rows.count();

for(let i=0; i<=rowCount-1;i++){
    const rowsData = await rows.nth(i).locator('td').allInnerTexts();
    console.log(`Row ${i + 1}:`, rowsData);
}


});