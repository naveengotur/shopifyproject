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
  
test('homepage, Productsfunctions', async ({ page }) => {
    //Home page
    await page.goto('https://admin.shopify.com/store/ugvvnh-vv?country=IN');
    
    // await page.locator("(//span[.='Products'])[2]").click();
    //Products
    await page.getByRole('link', { name: 'Products' }).click();
    await page.getByRole('link', { name: 'Add product' }).click();
    await page.getByRole('textbox', { name: 'Title' }).click();
    await page.getByRole('textbox', { name: 'Title' }).fill('Pen');
    await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByRole('paragraph').click();
    await page.locator('iframe[title="Rich Text Area"]').contentFrame().getByLabel('Rich Text Area. Press ALT-0').fill('TEst');
    await page.getByRole('button', { name: 'Upload new' }).click();
    await page.locator('body').setInputFiles('image1.jpg');
    await page.getByRole('textbox', { name: 'Price ₹', exact: true }).dblclick();
    await page.getByRole('textbox', { name: 'Price ₹', exact: true }).fill('350');
    await page.getByRole('textbox', { name: 'Cost per item ₹' }).click();
    await page.getByRole('textbox', { name: 'Cost per item ₹' }).fill('250');
    await page.getByRole('spinbutton', { name: 'Shop location quantity' }).click();
    await page.getByRole('spinbutton', { name: 'Shop location quantity' }).fill('24');
    await page.getByText('This product has a SKU or').click();
    await page.getByRole('textbox', { name: 'SKU (Stock Keeping Unit)' }).click();
    await page.getByRole('textbox', { name: 'SKU (Stock Keeping Unit)' }).fill('145214');
    await page.getByRole('textbox', { name: 'Weight' }).dblclick();
    await page.getByRole('textbox', { name: 'Weight' }).fill('25');
    await page.getByLabel('Weight unit').selectOption('GRAMS');
    await page.getByRole('button', { name: 'Add options like size or color' }).click();
    await page.locator('#PolarisPortalsContainer').getByText('Ink color').click();
    await page.getByRole('searchbox', { name: 'Ink color' }).click();
    await page.getByText('BlueBlue').click();
    await page.getByText('BlackBlack').click();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByRole('button', { name: 'Select image for Blue variant' }).click();
    await page.getByRole('checkbox', { name: 'checkbox' }).check();
    await page.getByRole('button', { name: 'Done' }).click();
    await page.getByLabel('Save').click();
    await page.goto('https://admin.shopify.com/store/ugvvnh-vv/products/9594105954661');
    await page.getByRole('heading', { name: 'Congratulations! You added' }).click();

      //Logout successfully
  await page3.getByText('Search My Store Search Log in').click();
  await page.getByRole('button', { name: 'Naveen Gotur' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Log out' }).click();
});



