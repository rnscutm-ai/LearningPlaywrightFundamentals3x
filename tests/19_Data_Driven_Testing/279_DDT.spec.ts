import { test, expect } from '@playwright/test';
import Users from './280_Users.json';

test('Verify DDT', async ({ page }) => {

    console.log(Users.username);
    console.log(Users.password);

});

