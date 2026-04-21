import { test, expect } from "@playwright/test";

test('login test', async ({ page }) => {

    await page.goto('https://www.saucedemo.com');

    //await page.locator('#user-name').fill('standard_user');
    //await page.locator('#password').fill('secret_sauce');
    //await page.locator('#login-button').click();
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button',{name:'Login'}).click();
    

    await expect(page).toHaveURL(/inventory/);

});