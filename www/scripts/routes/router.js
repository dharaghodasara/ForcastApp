/*global define*/

define([
    'jquery',
    'backbone'
], function($, Backbone) {
    'use strict';
    var self;
    var IndexRouter = Backbone.Router.extend({
        routes: {
            '': 'loadHomePage',
            'current-location-weather': 'getCurrentWeather',
            'multiple-city-weather': 'getCityWeather'
        },
        initialize: function() {
            self = this;
            //will remove previous view before rendering new view
            $(window).on('hashchange', self.remove_previous_view);
        },
        loadHomePage: function() {
            require(['views/index'], function(View) {
                self.view = new View();
            });
        },
        getCurrentWeather: function() {
            require(['views/current-location-weather'], function(View) {
                self.view = new View();
            });
        },
        getCityWeather: function() {
            require(['views/city-weather'], function(View) {
                self.view = new View();
            });
        },
        remove_previous_view: function() {
            if (_.size(self.view)) {
                self.view.remove();
                //append DOM element which is removed by view remove function
                $('.main').html('<div class="container"></div>');
            }
        }

    });

    return IndexRouter;
});
