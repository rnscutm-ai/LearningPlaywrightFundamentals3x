import {test, expect} from '@playwright/test';

test.skip('Checkout with paypal', async({page})=>{
    // never executes
});

test.only('Login as Rabi', async({page})=>{
// only this test runs, every thing else in the file is ignored
});

test.fail('cart total is wrong,BUG-451', async({page})=>{
    expect(90).toBe(100); // actually returns 90
});

test.fixme('upload 2Gb file', async({page})=>{
// skipped, but flagged as "needs fixing"
});

test('full regression report', async()=>{
test.slow();
console.log(test.info().timeout); // 90000 instead of 30000
});

test('mobile layout', async({page, browserName})=>{
    test.fixme(browserName === 'webkit', 'Safari renders menu wrong');
});
