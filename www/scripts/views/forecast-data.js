/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/forecast-data.html',
    'collections/forecast'
], function(
    $,
    _,
    Backbone,
    tmplForecastInfo,
    ForecastData
) {
    'use strict';
    var self;
    var View = Backbone.View.extend({

        tagName: 'div',

        initialize: function(options) {
            self = this;
            self.data = {
                cnt: 14
            };
            //prepare data object based on requirement.
            if (options.city) {
                _.extend(self.data, {
                    q: options.city
                });
            } else {
                _.extend(self.data, {
                    lat: options.lat,
                    lon: options.lng
                });
            }
            self.ForecastData = new ForecastData();
        },

        render: function(callback) {
            self.ForecastData.fetch({
                data: self.data,
                async:false,
                timeout:15000,
                success: function(data) {
                    //Error
                    var parsedData = data.toJSON()[0];                  
                    if (parsedData.cod !== "200") {
                        App.Toast("Invalid City Name");
                        callback(self,false);
                        return false;
                    }
                    $(self.el).html(_.template(tmplForecastInfo, {
                        data: parsedData.list,
                        cityName: parsedData.city.name
                    }));
                    callback(self,true);
                },
                error : function(){
                    if(Connection.NONE === navigator.connection.type)
                        App.Toast("No network connection");
                    callback(self,false);
                }
            });
        }
    });

    return View;
});
