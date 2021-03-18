const { I } = inject();

module.exports = {

  buttons: {
    btn_finish_order: '#finish-order',
    btn_cash: '#Dinheiro'
  },

  checkbox: {
    opt_without_change: 'Não preciso de troco'
  },

  goToPaymentForm(){
    I.wait(3)
    I.waitForElement(this.buttons.btn_finish_order, 10)
    I.click(this.buttons.btn_finish_order)
    I.wait(3)
    I.waitForElement(this.buttons.btn_finish_order, 10)
    I.click(this.buttons.btn_finish_order)
  },

  selectPaymentForm(){
    I.waitForElement(this.buttons.btn_cash, 10)
    I.click(this.buttons.btn_cash)
    I.waitForText(this.checkbox.opt_without_change, 10)
    I.click(this.checkbox.opt_without_change)
  }
}
