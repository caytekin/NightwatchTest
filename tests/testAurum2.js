/**
 * Created by cigdem.aytekin on 18-9-2015.
 */
module.exports = {
    'Demo test Aurum 2' : function (client) {

        client
            .url('http://aurum.dev:9999/')
            .pause(1000);

        // expect element  to be present in 1000ms
        client.expect.element('body').to.be.present.before(1000);

        client.expect.element('div[class="hg-widget"]').to.be.present.before(1000);

        client.expect.element('[class="hg-widget"]').text.to.contain('Hello World');

        client.expect.element('.foo').text.to.contain('Hello World');

        // expect element  to have attribute 'class' which contains text 'vasq'
        client.expect.element('[class="hg-widget"]').to.have.attribute('data-widgetid').which.contains('helloWorldWidget');

        // expect element <#lst-ib> to be an input tag
        //client.expect.element('#lst-ib').to.be.an('input');

        // expect element <#lst-ib> to be visible
        //client.expect.element('#lst-ib').to.be.visible;

        client.end();
    }

};