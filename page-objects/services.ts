import { Locator, Page } from '@playwright/test';

export class ServicesPage {
    private page: Page;
    constructor(page: Page) {
      this.page = page;
    }
  
    async goto() {
      await this.page.goto('http://localhost:8080/parabank/services.htm');

    }
}