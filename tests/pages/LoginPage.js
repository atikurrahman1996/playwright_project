exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLinke = "#login2"; // login link ID
    this.usernameInput = "#loginusername";
    this.userPassword = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
  }

  async gotoLoginPage() {
    await this.page.goto("https://www.demoblaze.com/");
  }

  async login(username, password) {
    await this.page.locator(this.loginLinke).click();
    await this.page.locator(this.usernameInput).fill(username);
    await this.page.locator(this.userPassword).fill(password);
    await this.page.locator(this.loginButton).click();
  }
};
