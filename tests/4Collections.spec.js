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

test('homepage, CollectionsFunctions', async ({ page }) => {
    await page.goto('https://admin.shopify.com/store/ugvvnh-vv?country=IN');
    await page.getByRole('link', { name: 'Collections' }).click();
    await page.getByRole('link', { name: 'Create collection' }).click();
    await page.getByRole('textbox', { name: 'Title' }).click();
    await page.getByRole('textbox', { name: 'Title' }).fill('pen');
    await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').click();
    await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('Test');
    await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').click();
    await page.locator('li:nth-child(2) > .Polaris-Bleed > div > .Polaris-Choice > .Polaris-Choice__LabelContent > .Polaris-Choice__Control > .Polaris-RadioButton > .Polaris-RadioButton__Backdrop').click();
    await page.getByLabel('Save').click();
    await page.locator('.Polaris-RadioButton__Backdrop').first().click();
    await page.locator('div').filter({ hasText: /^There are no products in this collection\.Search or browse to add products\.$/ }).nth(2).click();
    await page.locator('li:nth-child(2) > .Polaris-Bleed > div > .Polaris-Choice > .Polaris-Choice__LabelContent > .Polaris-Choice__Control > .Polaris-RadioButton > .Polaris-RadioButton__Backdrop').click();
    await page.getByRole('combobox', { name: 'Condition 1 value' }).click();
    await page.getByRole('combobox', { name: 'Condition 1 value' }).fill('test');
    await page.locator('form div').filter({ hasText: 'There are errors with this collection:Enter value for Product tag is equal to.' }).first().click();
    await page.getByLabel('Save').click();
    await page.getByRole('heading', { name: 'Created pen' }).click();

      //Logout successfully
  await page3.getByText('Search My Store Search Log in').click();
  await page.getByRole('button', { name: 'Naveen Gotur' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Log out' }).click();
});