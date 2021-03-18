const { I } = inject();

module.exports = {

  buttons: {
    btn_quantity_plus: '#plus-button',
    btn_add_product_on_bag: '#add-product',
    btn_clear_bag: '#primary-modal-button'
  },

  addQuantityOFProduct(quatity){
    for (let i = 0; i < quatity; i++) {
      I.waitForElement(this.buttons.btn_quantity_plus, 10)
      I.click(this.buttons.btn_quantity_plus)
    }
  },

  async addProductOnBag(){
    I.click(this.buttons.btn_add_product_on_bag)

    if(await I.isElementVisible(this.buttons.btn_clear_bag)){
      I.click(this.buttons.btn_clear_bag)
    }
  }
}
