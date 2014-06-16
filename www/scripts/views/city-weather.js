/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/city-list.html',
    'text!templates/city-name.html',
    'views/forecast-data'
], function(
    $,
    _,
    Backbone,
    App,
    tmplCityList,
    tmplCityName,
    ForecastData
) {
    'use strict';
    var self;
    var View = Backbone.View.extend({

        el: '.container',

        events: {
            'click .add-option': 'addCity',
            'click .get-weather-data': 'getWeatherData'
        },
        initialize: function() {
            self = this;
            self.selectedCities = [];
            this.render();
        },

        render: function() {
            $(self.el).html(_.template(tmplCityList));
            App.hideSpinner();
        },

        addCity: function() {
            var name = $('.city-name').val();
            self.selectedCities.push(name);
            self.displayCityName(name);
        },

        displayCityName: function(name) {
            $('.city-name').val("");
            $('.city-list').append(_.template(tmplCityName, {
                name: name
            }));
        },

        getWeatherData: function() {
            $(self.el).empty();
            App.showSpinner();           
            //It is not valid to stop page rendering till get data of all city. hide loader once get response from any one city
            var dataRecevied = _.once(App.hideSpinner);
            var isReturn = false;
            _.each(self.selectedCities, function(city) {
                var cityForecastDataView = new ForecastData({
                    city: city
                });
                cityForecastDataView.render(function(ref,success) {
                    //notify that data received from server.
                    dataRecevied();
                    //return in case of error
                    if(!success){
                        App.Toast('Failed to get weather information.');
                        isReturn = true;  
                        return false;                         
                    }                
                    $(self.el).append(ref.el);                    
                });
                if(isReturn) return;
            });
        }
    });

    return View;
});
