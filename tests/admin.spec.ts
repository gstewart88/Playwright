import { test, expect } from '@playwright/test';
import { AdminPage } from '../page-objects/admin';
let adminPage: AdminPage

test.beforeEach(async ({ page }) => {
    adminPage = new AdminPage(page);
    await adminPage.goto()
})

test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Admin/);
  });
  