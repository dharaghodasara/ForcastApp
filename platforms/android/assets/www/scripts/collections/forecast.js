/*global define*/

define([
    'underscore',
    'backbone',
    'models/forecast'
], function(_, Backbone, ForcastModel) {
    'use strict';

    var ForcastCollection = Backbone.Collection.extend({
        model: ForcastModel,
        initialize: function() {            
        },
        url: function() {
            return 'http://api.openweathermap.org/data/2.5/forecast/daily';
        }
    });

    return ForcastCollection;
});
