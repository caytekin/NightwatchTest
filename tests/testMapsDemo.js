/**
 * Created by cigdem.aytekin on 18-9-2015.
 */
module.exports = {
    //'Demo test Address List title present' : function (browser) {
    //    browser
    //        .url('http://localhost:63342/googleMapsListDemo/index.html#/addresslist')
    //        .waitForElementVisible('body', 1000)
    //        .expect.element('title').to.be.present;
    //        //.expect.element('title').text.to.equal('The demo page')
    //    browser.end();
    //},

    'Demo test Address List title contains e' : function (browser) {
        browser
            .url('http://localhost:63342/googleMapsListDemo/index.html#/addresslist')
            .waitForElementVisible('#myAddressList', 1000)
            //.expect.element('#myAddressList').to.be.present
            .expect.element('#myAddressList').text.to.contain('Rotterdam');
        browser.end();
    }




};