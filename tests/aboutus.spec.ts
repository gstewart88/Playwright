import { test, expect } from '@playwright/test';
import { AboutUsPage } from '../page-objects/aboutus';
let aboutusPage: AboutUsPage

test.beforeEach(async ({ page }) => {
    aboutusPage = new AboutUsPage(page);
    await aboutusPage.goto()
})

test('has title', async ({ page }) => {
    // Expect a title "to contain" a substring.
      await expect(page).toHaveTitle(/About Us/);
  });
  