define([], function() {
    'use strict';
    var App = {
        showSpinner : function(){
            spinnerplugin.show({
                overlay: false // defaults to true           
            });
        },
        hideSpinner : function(){
            spinnerplugin.hide();
        },
        Toast : function(msg){
            toast.show(msg);
        }
    };   
    return App;
});
