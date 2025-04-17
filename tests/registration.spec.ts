import { test, expect, request } from '@playwright/test';
import { RegistrationPage } from '../page-objects/registration';
let registrationPage: RegistrationPage

test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.goto()
})

test.afterEach(async ({ request }) => {
    const response = await request.post('http://localhost:8080/parabank/services/bank/cleanDB');
    //When using WebKit on macOS, accessing localhost will not pick up client certificates. You can make it work by replacing localhost with local.playwright.
    expect(response.status()).toBe(204);
});

test('has title', async ({ page }) => {
  // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Register/);
});

test('this username already exists error', async ({ page }) => {
    // Create new user twice to create a duplicate
    await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
    await registrationPage.goto()
    await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
    await expect(registrationPage.duplicateerror).toBeVisible();
});