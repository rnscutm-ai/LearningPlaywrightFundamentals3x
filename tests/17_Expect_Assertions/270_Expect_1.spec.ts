import { test, expect } from '@playwright/test';


test.describe('Expect Assertions', () => {

    const URL = "https://app.thetestingacademy.com/playwright/widgets/scroll";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);

    });
    test('Expect assertions', async ({ page }) => {
        expect(1 + 2).toBe(3);
        let ac = false;
        expect(ac).toBeFalsy();
        expect(true).toBeTruthy();
        expect(null).not.toBeNull();
        expect(134).toBeGreaterThan(40);
        expect([1, 2, 3]).toEqual([1, 2, 3]);
        expect({ name: "rabindra", age: 40 }).toEqual({ name: "rabindra", age: 40 });
        expect({ role: "admin" }).toHaveProperty("role");

    });
});
