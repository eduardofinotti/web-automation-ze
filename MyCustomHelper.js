'use strict';
const { I } = inject();

let Helper = codecept_helper;

class MyHelper extends Helper {
    async isElementVisible(selector) {
        const helper = this.helpers['WebDriver'];

        var exists = await helper.grabNumberOfVisibleElements(selector)

        if (exists == 1){
            return true
        } else if (exists == 0 ){
            return false
        } else if (exists > 1) {
            return 'Existe mais de um elemento com esse selector.'
        }
    }
}
module.exports = MyHelper;

