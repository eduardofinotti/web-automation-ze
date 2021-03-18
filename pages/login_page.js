const { I, home_page } = inject();

module.exports = {

  buttons: {
    btn_enter_login: '#login-mail-button-sign-in'
  },

  fields: {
    field_email: '#login-mail-input-email',
    field_password: '#login-mail-input-password'
  },

  messages: {
    label_access_account: 'Conta e pedidos'
  },

  fillEmail(email) {
    I.waitForElement(this.fields.field_email, 5)
    I.fillField(this.fields.field_email, email)
  },

  fillPassword(password){
    I.fillField(this.fields.field_password, password)
  },

  clickLogin(){
    I.click(this.buttons.btn_enter_login)
  },

  checkLogged(){
    I.waitForText(this.messages.label_access_account, 10)
    I.see(this.messages.label_access_account)
  },

  doLogin(email, password) {
    home_page.confirmAge()
    home_page.checkHome()
    home_page.openLogin()
    this.fillEmail(email)
    this.fillPassword(password)
    this.clickLogin()
    this.checkLogged()
  }

}
