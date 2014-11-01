Ext.define('HolaLP.view.DeviceInfo', {
    extend: 'Ext.Panel',
    alias: 'widget.device-info',

    config: {
        layout:{
            type: 'vbox',
            pack: 'center'
        },

        tpl: [
            '<div style="text-align:center;">',
            '   {platform} ({version})',
            '</div>'
        ]
    },

    initialize: function() {
        // this.setHtml("Platform: " + device.platform + " " + device.version);
        var device = window.device || {platform: 'WEB', version: 'no-cdv'};
        this.setData(device);
    }

});
