require([
    'jquery',
    'backbone',
    'routes/router',
    'foundation',
    'app'
], function($, Backbone, Router, foundation,App) {
    'use strict';
    var mobile = navigator.userAgent.match(/iPad|iPhone|iPod|android|blackberry/i);
    
    function onDeviceReady() {
        App.showSpinner();
        if(Connection.NONE === navigator.connection.type)
           App.Toast("No network connection");
        $(document).foundation();
        new Router();
        Backbone.history.start();
    }
    if (mobile) {
        document.addEventListener('deviceready', onDeviceReady, false);
    } else {
        onDeviceReady();
    }

});
