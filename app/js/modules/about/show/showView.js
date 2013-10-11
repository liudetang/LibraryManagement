define(['marionette', 'tpl!modules/about/show/templates/message.tpl'], function (Marionette, messageTemplate) {
    return {
        Message: Marionette.ItemView.extend({
            template: messageTemplate
        })
    };
});