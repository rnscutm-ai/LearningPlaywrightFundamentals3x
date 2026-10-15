import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log("Before All");
});

test.beforeEach(async () => {
    console.log("Before Each");
});
test('Test Hooks', async () => {
    console.log("Test Case");
});
test('Test Hooks 2', async () => {
    console.log("Test Case 2");
});
test.afterEach(async () => {
    console.log("After Each");
});
test.afterAll(async () => {
    console.log("After All");
});