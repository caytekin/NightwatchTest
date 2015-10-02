/**
 * Created by cigdem.aytekin on 18-9-2015.
 */
module.exports = {
    'Demo test Aurum' : function (browser) {
        browser.url('http://aurum.dev:9999/')
            .waitForElementVisible('body', 1000)
            .waitForElementPresent('div[class="hg-widget"]', 2000)
            .expect.element('[class="hg-widget"]').text.to.contain('Hello World');
        browser
            .end();
    }

};