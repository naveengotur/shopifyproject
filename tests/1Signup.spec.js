import { test, expect } from '@playwright/test';

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

  //Logout successfully
  await page3.getByText('Search My Store Search Log in').click();
  await page.getByRole('button', { name: 'Naveen Gotur' }).click();
  await page.waitForTimeout(2000);
  await page.getByRole('menuitem', { name: 'Log out' }).click();

});