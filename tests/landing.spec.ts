import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/ParaBank/);
});

test('register link', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Register' }).click();
  await expect(page).toHaveTitle(/Register/);
});

test('forgot login info link', async ({ page }) => {
  await page.goto('https://parabank.parasoft.com/parabank/index.htm');
  await page.getByRole('link', { name: 'Forgot login info?' }).click();
  await expect(page).toHaveTitle(/Lookup/);
});
