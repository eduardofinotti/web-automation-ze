const { I } = inject();

module.exports = {

  buttons: {
    btn_cell_address: '#delivery-options-card',
    opt_edit_address: '#delivery-options-tool-tip-address',
    btn_continue: '#address-details-button-continue'
  },

  fields: {
    field_search_adrress: '#address-search-input-address'
  },

  messages: {
    first_result_search_address: '//*[@id="auto-complete-address Avenida Paulista, 199 Bela Vista, São Paulo - SP, Br…"]/div[2]/div[1]'
  },

  checkbox: {
    opt_without_complement: '#address-details-checkbox-without-complement',
    opt_home: '#address-details-button-home'
  },

  chooseAddress(address) {
    I.wait(5)
    I.click(this.buttons.btn_cell_address)
    I.waitForElement(this.buttons.opt_edit_address, 10)
    I.click(this.buttons.opt_edit_address)
    I.wait(2)
    I.fillField( this.fields.field_search_adrress, address)
    I.waitForElement(this.messages.first_result_search_address, 5)
    I.click(this.messages.first_result_search_address)
    I.waitForElement(this.checkbox.opt_without_complement, 5)
    I.click(this.checkbox.opt_without_complement)
    I.click(this.checkbox.opt_home)
    I.click(this.buttons.btn_continue)
    I.wait(6)
  }
}
