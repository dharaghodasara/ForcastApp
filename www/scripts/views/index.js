/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'app',
    'text!templates/options.html'
], function($, _, Backbone,App, tmpl_main) {
    'use strict';
    var self;
    var IndexView = Backbone.View.extend({

        el: '.container',

        events: {
            'click .weather-option': 'selectOption'
        },

        initialize: function() {
            self = this;            
            this.render();
        },
        render: function() {
            App.hideSpinner();
            $(self.el).html(_.template(tmpl_main));
        },
        selectOption: function(e) {
            e.preventDefault();
            var selectedOption = $(e.target).data('option');
            if (selectedOption === 'custom') {
                self.load_custom_option();
            } else {
                self.load_current_weather();
            }
        },
        load_current_weather: function() {
            window.location.href = "#current-location-weather";
        },
        load_custom_option: function() {
            window.location.href = "#multiple-city-weather";
        }
    });

    return IndexView;
});
