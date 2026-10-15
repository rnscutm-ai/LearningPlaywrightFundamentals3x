import { test, expect } from '@playwright/test';

test.describe.serial('Checkout suite- must run in order', () => {
    test('Open landing page', async () => { console.log('1'); });
    test('Search for product', async () => { console.log('2'); });
    test('Add product to cart', async () => { console.log('3'); });
    test('Proceed to checkout', async () => { console.log('4'); });
}); 

// these two run in parallel-idependent of serial suite above
test('Standalone A', async () => { console.log('A'); });
test('Standalone B', async () => { console.log('B'); });
