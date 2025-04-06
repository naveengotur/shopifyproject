import { test, expect } from '@playwright/test';
import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure',
  },
});

test('test', async ({ page }) => {
  //Signup
  await page.goto('https://www.shopify.com/in/logout?dest=default');
  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('banner').getByRole('link', { name: 'Start free trial' }).click();

  await page.screenshot({ path: 'screenshot.png' });
  await page.getByRole('link', { name: 'Sign up with email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('naveen94.gotur@gmail.com');
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Create Shopify account' }).click();
  await page.screenshot({ path: 'screenshot.png' });
  
  // Login page
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.screenshot({ path: 'screenshot.png' });
  await page.waitForTimeout(3000);
  await page.goto('https://accounts.shopify.com/select?rid=5589b69d-f617-421f-830a-f24762df783e');
  await page.getByRole('button', { name: 'I don\'t want help setting up' }).click();
  await page.waitForTimeout(2000);

  // Again login page 
  await page.getByRole('textbox', { name: 'Email' }).fill('naveen94.gotur@gmail.com');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Continue with email' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Test@1234');
  await page.waitForTimeout(2000);
  await page.getByRole('button', { name: 'Log in' }).click();
  
  //Homepage
  await page.getByRole('link', { name: 'NG Naveen Gotur naveen94.' }).click();
  await page.getByRole('button', { name: 'Naveen Gotur' }).click();
  await page.getByRole('menuitem', { name: 'All stores' }).click();
  await page2.goto('https://admin.shopify.com/?no_redirect=true');
  await page2.locator('a').filter({ hasText: 'MSMy Store1gmwvn-4u.myshopify' }).click();

  //click on the Online button
  await page2.getByRole('link', { name: 'Online Store', exact: true }).click();
  await page2.goto('https://admin.shopify.com/store/1gmwvn-4u/themes?appLoadId=c714b7a9-3048-4b7d-a66b-603223eac38a');
  await page2.locator('iframe[name="cb2ba1aa-7e2b-4029-a383-92e4c5311278"]').contentFrame().getByRole('link', { name: 'Customize Spotlight' }).first().click();
  await page2.locator('iframe[name="cb2ba1aa-7e2b-4029-a383-92e4c5311278"]').contentFrame().getByRole('link', { name: 'Exit' }).click();
  await page2.locator('iframe[name="cb2ba1aa-7e2b-4029-a383-92e4c5311278"]').contentFrame().getByRole('button', { name: 'Click for more theme actions' }).first().click();
  const page3Promise = page2.waitForEvent('popup');
  await page2.locator('iframe[name="cb2ba1aa-7e2b-4029-a383-92e4c5311278"]').contentFrame().getByRole('link', { name: 'Preview (opens in a new' }).click();
  const page3 = await page3Promise;
  await page3.getByText('Search My Store Search Log in').click();
  await page.getByRole('button', { name: 'Naveen Gotur' }).click();
  await page.waitForTimeout(2000);

  //Logout successfully
  await page.getByRole('menuitem', { name: 'Log out' }).click();
});