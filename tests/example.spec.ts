import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://shop.demoqa.com/');

  await expect(page).toHaveTitle(/ToolsQA Demo Site – ToolsQA – Demo E-Commerce Site/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://shop.demoqa.com/');
});
