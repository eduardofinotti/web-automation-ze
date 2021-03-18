const { I, home_page } = inject();

module.exports = {

  checkMessage(message){
    I.waitForText(message, 5)
    I.see(message)
  },

}
