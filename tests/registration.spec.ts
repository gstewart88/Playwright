import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../page-objects/registration';
let registrationPage: RegistrationPage

// test.beforeEach(async ({ page }) => {
//     const registrationPage = new RegistrationPage(page)
//     await registrationPage.goto()
// })

test('has title', async ({ page }) => {
    const registrationPage = new RegistrationPage(page)
    await registrationPage.goto()
  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Register/);
});

test('this username already exists error', async ({ page }) => {
    const registrationPage = new RegistrationPage(page)
    await registrationPage.goto()
    await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
    await expect(registrationPage.duplicateerror).toBeVisible();
});