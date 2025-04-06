import { test, expect } from '@playwright/test';

test('Login_page', async ({ page }) => {
    // Login page
    await page.goto('https://www.shopify.com/in/logout');
    await page.getByRole('link', { name: 'Log in' }).click();
    // Enter the credentails
    await page.goto('https://accounts.shopify.com/lookup?rid=b1739a4d-4c32-4dbf-9ca5-53c570263699&verify=1743917094-jI5KEAlu3pXkVGKKLCYP79U7vn6f4waD4uZ%2FzhBM7FA%3D');
    await page.getByRole('textbox', { name: 'Email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill('naveen94.gotur@gmail.com');
    await page.getByRole('button', { name: 'Continue with email' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
   
    await page.getByRole('button', { name: 'Log in' }).click();
    await page.waitForTimeout(2000);
    // Profile page displayed
    await page.goto('https://admin.shopify.com/store/ugvvnh-vv?ui_locales=en-IN');
  
    // await page.getByRole('link', { name: 'Shopify' }).click();
    await page.getByRole('link', { name: 'NG Naveen Gotur naveen94.' }).click();
    // goto homepage
    await page.goto('https://admin.shopify.com/store/ugvvnh-vv?country=IN');
    await page.waitForTimeout(4000);
  
  });

test('homepage, Giftcards', async ({ page }) => {
    await page.goto('https://admin.shopify.com/store/ugvvnh-vv?country=IN');
        await page.getByRole('link', { name: 'Gift cards' }).click();
        await page.getByRole('button', { name: 'Add gift card product' }).click();
        await page.getByRole('textbox', { name: 'Title' }).click();
        await page.getByRole('textbox', { name: 'Title' }).fill('GiftCard');
        await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').click();
        await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Test');
        await page.getByRole('button', { name: 'Upload new' }).click();
        await page.locator('body').setInputFiles('download.jpeg');
        await page.getByRole('button', { name: 'Save', exact: true }).click();
        await page.getByRole('heading', { name: 'Created GiftCard' }).click();
        await page.getByRole('link', { name: 'Discounts' }).click();
        await page.getByRole('button', { name: 'Create discount' }).nth(1).click();
        await page.locator('#moneyOffProduct').getByText('Product discount').click();
        await page.getByRole('textbox', { name: 'Discount Code' }).click();
        await page.getByRole('textbox', { name: 'Discount Code' }).fill('SAVE10');
        await page.getByRole('textbox', { name: 'Percentage Discount Value %' }).click();
        await page.getByRole('textbox', { name: 'Percentage Discount Value %' }).fill('10');
        await page.getByRole('button', { name: 'Browse collections' }).click();
        await page.getByText('checkboxpenpen0 products').click();
        await page.getByText('pen').nth(1).click();
        await page.getByText('checkboxpenpen0 products').click();
        await page.getByRole('button', { name: 'Add', exact: true }).click();
        await page.getByRole('button', { name: 'Save', exact: true }).click();
        await page.getByRole('heading', { name: 'SAVE10 was created' }).click();


          //Logout successfully
  await page3.getByText('Search My Store Search Log in').click();
  await page.getByRole('button', { name: 'Naveen Gotur' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Log out' }).click();
    });