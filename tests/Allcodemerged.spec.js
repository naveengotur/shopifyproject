
import { test, expect } from '@playwright/test';
//Signup
test('test', async ({ page }) => {
  await page.goto('https://www.shopify.com/in/logout?dest=default');
  await page.screenshot({ path: 'screenshot.png' });
  await page.screenshot({page:'./screenshots/page.png'});
  await page.getByRole('banner').getByRole('link', { name: 'Start free trial' }).click();
//   await page.getByRole('button', { name: 'I don\'t want help setting up' }).click();
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('link', { name: 'Sign up with email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('naveen94.gotur@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Create Shopify account' }).click();
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.screenshot({ path: 'screenshot.png' });

  await page.waitForTimeout(3000);
  await page.goto('https://accounts.shopify.com/select?rid=5589b69d-f617-421f-830a-f24762df783e');
//   await page.getByRole('button', { name: 'I don\'t want help setting up' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('textbox', { name: 'Email' }).fill('naveen94.gotur@gmail.com');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continue with email' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'NG Naveen Gotur naveen94.' }).click();
  await page.getByRole('button', { name: 'Naveen Gotur' }).click();
  await page.getByRole('menuitem', { name: 'All stores' }).click();
  await page2.goto('https://admin.shopify.com/?no_redirect=true');
  await page2.locator('a').filter({ hasText: 'MSMy Store1gmwvn-4u.myshopify' }).click();
  await page2.getByRole('link', { name: 'Online Store', exact: true }).click();
  await page2.goto('https://admin.shopify.com/store/1gmwvn-4u/themes?appLoadId=c714b7a9-3048-4b7d-a66b-603223eac38a');
  await page2.locator('iframe[name="cb2ba1aa-7e2b-4029-a383-92e4c5311278"]').contentFrame().getByRole('link', { name: 'Customize Spotlight' }).first().click();
  await page2.locator('iframe[name="cb2ba1aa-7e2b-4029-a383-92e4c5311278"]').contentFrame().getByRole('link', { name: 'Exit' }).click();
  await page2.locator('iframe[name="cb2ba1aa-7e2b-4029-a383-92e4c5311278"]').contentFrame().getByRole('button', { name: 'Click for more theme actions' }).first().click();
  const page3Promise = page2.waitForEvent('popup');
  await page2.locator('iframe[name="cb2ba1aa-7e2b-4029-a383-92e4c5311278"]').contentFrame().getByRole('link', { name: 'Preview (opens in a new' }).click();
  const page3 = await page3Promise;

});

//Login
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

//Products
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

});

//Collections
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

});

//Giftcards
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

    });

    //App install
    test('homepage, App install', async ({ page }) => {
      await page.goto('https://admin.shopify.com/store/ugvvnh-vv?country=IN');
    await page.getByRole('button', { name: 'Apps' }).click();
  await page.getByRole('option', { name: 'All recommended apps' }).click();
  await page.locator('div:nth-child(2) > div > ._flexColumnContainer_1uo3o_1').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Shopify Search & Discovery' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://apps.shopify.com/search-and-discovery?st_campaign=app-card-6bac79c21731e1e8e59b127c6213010a&st_source=admin-web&utm_campaign=app-card-6bac79c21731e1e8e59b127c6213010a&utm_source=shopify');
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('button', { name: 'Install', exact: true }).click();
  const page2 = await page2Promise;
  await page2.getByRole('heading', { name: 'Search & Discovery' }).getByRole('link').click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().locator('div').filter({ hasText: /^Customize filters$/ }).getByRole('link').click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('link', { name: 'Edit Availability' }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('textbox', { name: 'Filter label' }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('textbox', { name: 'Filter label' }).fill('Availability1');
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('button', { name: 'Save' }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('link', { name: 'Filters', exact: true }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('cell', { name: 'Edit Price', exact: true }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('textbox', { name: 'Filter label' }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('textbox', { name: 'Filter label' }).fill('100');
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('button', { name: 'Save' }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('link', { name: 'Filters', exact: true }).click();
  const page3Promise = page2.waitForEvent('popup');
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('link', { name: 'View' }).click();
  const page3 = await page3Promise;
  await page3.getByText('My Store Enter using password').click();
  await page3.getByRole('textbox', { name: 'Email' }).click();
  await page3.getByRole('textbox', { name: 'Email' }).fill('naveen94.gotur@gmail.com');
  await page3.getByRole('button', { name: 'Subscribe' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 5' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 6' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 4' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Verify Answers' }).click();
  await page3.locator('iframe[title="Widget containing checkbox for hCaptcha security challenge"]').contentFrame().locator('#anchor-tc').click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 4' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Next Challenge' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 1' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 3' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Challenge Image 8' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByRole('button', { name: 'Verify Answers' }).click();
  await page3.locator('iframe[title="Main content of the hCaptcha challenge"]').contentFrame().getByText('If there are None, click Skip').click();
  await page3.locator('div:nth-child(3) > div:nth-child(2)').first().click();
  await page2.getByLabel('Navigation', { exact: true }).getByRole('link', { name: 'Search & Discovery' }).click();
  await page2.getByRole('link', { name: 'Settings' }).first().click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('row', { name: 'Select Product recommendation Edit GiftCard No products No products' }).getByLabel('Select Product recommendation').check();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('row', { name: 'Select Product recommendation Edit Pen No products No products' }).getByLabel('Select Product recommendation').check();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('link', { name: 'Add recommendations' }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('textbox', { name: 'Search products' }).first().click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('button', { name: 'Browse' }).first().click();
  await page2.getByLabel('Select: GiftCard').click();
  await page2.getByLabel('Disabled: Pen').click();
  await page2.getByLabel('Disabled: Pen').click();
  await page2.getByRole('button', { name: 'Add' }).click();
  await page2.locator('iframe[name="app-iframe"]').contentFrame().getByRole('button', { name: 'Browse' }).first().click();
  await page2.getByLabel('Select: Pen').click();
  await page2.getByRole('button', { name: 'Add' }).click();
  await page2.getByRole('button', { name: 'Save' }).click();
  await page2.getByRole('button', { name: 'Naveen Gotur' }).click();
  await page2.getByRole('menuitem', { name: 'Log out' }).click();
  });
