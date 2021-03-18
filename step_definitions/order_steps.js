const { I, home_page, login_page, address_page, product_page, checkout_page } = inject();

Given('I am logged on application with {string} and {string}', async (email, password) => {
  await login_page.doLogin(email, password)
});

Given('I choose my address {string}', (address) => {
  address_page.chooseAddress(address)
});

Given('I search the product {string}', async (product) => {
  await home_page.searchProduct(product)
});

Given('I add {int} in quatity', (quatity) => {
  product_page.addQuantityOFProduct(quatity)
});

Given('I add product on bag', () => {
  product_page.addProductOnBag()
});

Given('I go to payment form', () => {
  checkout_page.goToPaymentForm()
});

Given('I select cash do payment', () => {
  checkout_page.selectPaymentForm()
});

When('I finish my order', () => {
  // I.click('#payment-method-button-finish-purchase')
  I.seeElement('#payment-method-button-finish-purchase')
});
When('I follow my order done', () => {
  console.log('Nao implementado porque não foi feito um pedido de fato, pois estamos no ambiente de prod.')
});