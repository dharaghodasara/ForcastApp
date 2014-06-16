/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'views/forecast-data'
], function(
    $,
    _,
    Backbone,
    App,
    ForecastData
) {
    'use strict';
    var self;
    var View = Backbone.View.extend({

        el: '.container',

        initialize: function() {
            self = this;
            this.getCurrentCity();
        },

        getCurrentCity: function() {
            App.showSpinner();
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(self.onSuccess, self.onError);
            }else{
                App.Toast("Only supported in device.");
            }
        },

        onSuccess: function(position) {
          self.getWeatherData(position.coords.latitude,position.coords.longitude); 
        },

        getWeatherData: function(lat, lng) {
            var cityForecastDataView = new ForecastData({
                lat: lat,
                lng: lng
            });
            cityForecastDataView.render(function(ref,success) {
                App.hideSpinner();
                if(!success){
                    App.Toast('Failed to get Weather Information.');
                    return false;
                }
                $(self.el).append(ref.el);
                
            });
        }
    });

    return View;
});
