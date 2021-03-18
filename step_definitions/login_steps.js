const { I, home_page, login_page, common_page } = inject();

Given('I am on Ze Delivery application', () => {
  I.amOnPage('/');
});

Given('I confirm my age', () => {
  home_page.confirmAge()
  home_page.checkHome()
});

Given('I open the login form', () => {
  home_page.openLogin()
});

When('I fill email {string} and password {string}', (email, password) => {
  login_page.fillEmail(email)
  login_page.fillPassword(password)
});

When('I click on enter application', () => {
  login_page.clickLogin()
});

Then('I am logged with success', () => {
  login_page.checkLogged()
});

Then('I see de message {string}', (message) => {
  common_page.checkMessage(message)
});
