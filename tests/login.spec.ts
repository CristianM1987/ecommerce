import { test, expect } from '@playwright/test';

test('go to my account', async ({ page }) => {
  await page.goto('https://shop.demoqa.com/')
  await page.getByText('Dismiss').click()
  await page.getByRole('link', { name: /My Account/i }).click()
  await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();

});

test('login fail data', async ({ page }) => {
  await page.goto('https://shop.demoqa.com/');
  try{
    await page.getByText('Dismiss').click()
    await page.getByRole('link', { name: /My Account/i }).click()
    await page.locator('xpath=//*[@id="username"]').fill('Usuario')
    await page.locator('xpath=//*[@id="password"]').fill('Password')
    await page.locator('xpath=//*[@id="rememberme"]').check()
    await page.getByRole('button', { name: 'Log in'}).click()
    //await expect(page.getByRole('heading', { name: 'My Account' })).toBeVisible();
  }
  catch(error){
    console.log('Error de administrador')
  }


});
