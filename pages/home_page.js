const { I } = inject();

module.exports = {
  
  buttons: {
    btn_age_18: '#age-gate-button-yes',
    btn_enter_login: '#welcome-button-sign-in'
  },

  fields: {
    field_search_address: '#fake-address-search-input',
    field_search_product: '#search-product-input'
  },

  messages: {
    first_result_search_product: '.css-kzmtws-productCard'
  },

  confirmAge(){
    I.click(this.buttons.btn_age_18)
  },

  checkHome(){
    I.seeElement(this.fields.field_search_address)
  },

  openLogin(){
    I.click(this.buttons.btn_enter_login)
  },

  searchProduct(product){
    I.fillField(this.fields.field_search_product, product)
    I.waitForElement(this.messages.first_result_search_product, 10)
    I.click(this.messages.first_result_search_product)
  }
}
