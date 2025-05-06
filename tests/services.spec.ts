import { test, expect } from '@playwright/test';
import { ServicesPage } from '../page-objects/services';
let servicesPage: ServicesPage

test.beforeEach(async ({ page }) => {
    servicesPage = new ServicesPage(page);
    await servicesPage.goto()
})

test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/Services/);
  });
  