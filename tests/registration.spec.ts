import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../page-objects/registration';
let registrationPage: RegistrationPage

test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.goto()
})

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Register/);
});

test('this username already exists error', async ({ page }) => {
    // TODO users are wiped every day so test needs setup/checked
    await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
    await expect(registrationPage.duplicateerror).toBeVisible();
});