require.config({
    
    baseUrl: 'app/js',
    
    paths: {
        backbone: 'lib/backbone',
        picky: 'lib/backbone.picky',
        syphon: 'lin/backbone.syphon',
        jquery: 'lib/jquery',
        jqueryui: 'lib/jquery-ui',
        json2: 'lib/json2',
        localstorage: 'lib/backbone.localstorage',
        marionette: 'lib/backbone.marionette',
        spin: 'lib/spin',
        spinjquery: 'lib/spin.jquery',
        tpl: 'lib/tpl',
        underscore: 'lib/underscore'
    },
    
    shim:{
        
        underscore:{
            exports: '_'
        },
        
        backbone: {
            deps: ['jquery', 'underscore', 'json2'],
            exports: 'Backbone'
        },

        picky: ['backbone'],

        syphon: ['backbone'],

        marionette: {
            deps: ['backbone'],
            exports: 'Marionette'
        },

        jqueryui: ['jquery'],

        localstorage: ['backbone'],

        spinjquery: ['spin', 'jquery']

    }
});

require(['app', 'modules/header/headerModule'], function(LibraryManager){
  LibraryManager.start();
});