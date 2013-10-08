define(['app', 'modules/header/list/listController'], function (LibraryManager, ListController){
    LibraryManager.module('HeaderModule', function(HeaderModule, LibraryManager, Backbone, Marionette, $, _) {

        var Controller = {
            listHeader: function (){
                ListController.listHeader();
            }
        };

    });
});