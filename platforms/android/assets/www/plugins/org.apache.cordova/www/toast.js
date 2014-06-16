cordova.define("org.apache.cordova.toast", function(require, exports, module) { var toast =  {
    show: function(message, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'toast', // mapped to our native Java class called "Calendar"
            'show', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "msg":message
            }]
        );
    }
}
module.exports = toast;
});
