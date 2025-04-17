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

test.describe('required fields', () => {
    test('first name', async ({ page }) => {
        await registrationPage.signUp('', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
        await expect(registrationPage.firstnameerror).toBeVisible();
    });
    test('last name', async ({ page }) => {
        await registrationPage.signUp('a', '', 'c', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
        await expect(registrationPage.lastnameerror).toBeVisible();
    });
    test('address', async ({ page }) => {
        await registrationPage.signUp('a', 'b', '', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
        await expect(registrationPage.addresserror).toBeVisible();
    });
    test('city', async ({ page }) => {
        await registrationPage.signUp('a', 'b', 'c', '', 'e', 'f', 'g', 'a', 'a', 'a');
        await expect(registrationPage.cityerror).toBeVisible();
    });
    test('state', async ({ page }) => {
        await registrationPage.signUp('a', 'b', 'c', 'd', '', 'f', 'g', 'a', 'a', 'a');
        await expect(registrationPage.stateerror).toBeVisible();
    });
    test('zipcode', async ({ page }) => {
        await registrationPage.signUp('a', 'b', 'c', 'd', 'e', '', 'g', 'a', 'a', 'a');
        await expect(registrationPage.zipcodeerror).toBeVisible();
    });
    test('ssn', async ({ page }) => {
        await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', '', 'a', 'a', 'a');
        await expect(registrationPage.ssnerror).toBeVisible();
    });
    test('username', async ({ page }) => {
        await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', '', 'a', 'a');
        await expect(registrationPage.usernameerror).toBeVisible();
    });
    test('password', async ({ page }) => {
        await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', '', 'a');
        await expect(registrationPage.passworderror).toBeVisible();
    });
    test('confirmation', async ({ page }) => {
        await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'a', '');
        await expect(registrationPage.confirmationerror).toBeVisible();
    });
  });

test('this username already exists error', async ({ page }) => {
    // Create new user twice to create a duplicate
    await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
    await registrationPage.goto()
    await registrationPage.signUp('a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'a', 'a');
    await expect(registrationPage.duplicateerror).toBeVisible();
});