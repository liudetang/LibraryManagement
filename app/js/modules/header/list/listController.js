define(['app', 'modules/header/list/listView'], function(LibraryManager, View) {

    LibraryManager.module('HeaderModule.List', function (List, LibraryManager, Backbone, Marionette, $, _) {
        
        List.Controller = {

            listHeader:function(){
                
                require(['entities/header'], function() {
                    
                    var links = LibraryManager.request('header:entities');
                    var headers = new View.Headers({collection:Links});

                    headers.on('brand:clicked', function() {
                        LibraryManager.trigger('contacts:list');
                    });

                    headers.on('itemView:navigate', function (childView, model) {
                        var trigger = model.get('navigationTrigger');
                        LibraryManager.trigger(trigger);
                    });

                    LibraryManager.headerRegion.show(headers);
                });
            },

            setActiveHeader: function(){
                
                var links = LibraryManager.request('header:entities');
                var headerToSelect = links.find( function (header){ 
                    return header.get('url') === headerUrl; 
                });

                headerToSelect.select();
                links.trigger('reset');
            }
        };
    });

    return LibraryManager.HeaderModule.List.Controller;
});