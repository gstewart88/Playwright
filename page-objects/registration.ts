import { Locator, Page } from '@playwright/test';

export class RegistrationPage {
    private page: Page;
    public firstname: Locator;
    public lastname: Locator;
    public street: Locator;
    public city: Locator;
    public state: Locator;
    public zipcode: Locator;
    public phonenumber: Locator;
    public ssn: Locator;
    public username: Locator;
    public password: Locator;
    public confirmation: Locator;
    public register: Locator;
    public firstnameerror: Locator;
    public lastnameerror: Locator;
    public addresserror: Locator;
    public cityerror: Locator;
    public stateerror: Locator;
    public zipcodeerror: Locator;
    public ssnerror: Locator;
    public usernameerror: Locator;
    public passworderror: Locator;
    public confirmationerror: Locator;
    public duplicateerror: Locator;
    
  
    constructor(page: Page) {
      this.page = page;
      this.firstname = page.locator('[id="customer\\.firstName"]');
      this.lastname = page.locator('[id="customer\\.lastName"]');
      this.street = page.locator('[id="customer\\.address\\.street"]');
      this.city = page.locator('[id="customer\\.address\\.city"]');
      this.state = page.locator('[id="customer\\.address\\.state"]');
      this.zipcode = page.locator('[id="customer\\.address\\.zipCode"]');
      this.phonenumber = page.locator('[id="customer\\.phoneNumber"]');
      this.ssn = page.locator('[id="customer\\.ssn"]');
      this.username = page.locator('[id="customer\\.username"]');
      this.password = page.locator('[id="customer\\.password"]');
      this.confirmation = page.locator('#repeatedPassword');
      this.register = page.getByRole('button', { name: 'Register' });
      this.firstnameerror = page.getByText('First name is required.');
      this.lastnameerror = page.getByText('Last name is required.');
      this.addresserror = page.getByText('Address is required.');
      this.cityerror = page.getByText('City is required.');
      this.stateerror = page.getByText('State is required.');
      this.zipcodeerror = page.getByText('Zip Code is required.');
      this.ssnerror = page.getByText('Social Security Number is');
      this.usernameerror = page.getByText('Username is required.');
      this.passworderror = page.getByText('Password is required.');
      this.confirmationerror = page.getByText('Password confirmation is');
      this.duplicateerror = page.getByText('This username already exists.');
    }
  
    async goto() {
      await this.page.goto('http://localhost:8080/parabank/register.htm');

    }
  
    async signUp(firstname:string, lastname:string, street:string, city:string, state:string, zipcode:string, ssn:string, username:string, password:string, confirmation:string) {
      await this.firstname.fill(firstname);
      await this.lastname.fill(lastname);
      await this.street.fill(street);
      await this.city.fill(city);
      await this.state.fill(state);
      await this.zipcode.fill(zipcode);
      await this.ssn.fill(ssn);
      await this.username.fill(username);
      await this.password.fill(password);
      await this.confirmation.fill(confirmation);
      await this.register.click();
    }
}