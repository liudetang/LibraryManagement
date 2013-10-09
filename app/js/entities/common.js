define(['app'], function (LibraryManager) {

    LibraryManager.module('Entities', function (Entities, Backbone, Marionette, $, _) {

        Entities.FilteredCollection = function  (options) {
            
            var original = options.collection;
            var filtered = new original.constructor();

            filtered.add(original.models);

            filtered.filterFunction = options.filterFunction;

            var applyFilter = function (filterCriterion, filterStrategy, collection) {
                
                var collection = collection || original;
                var criterion;

                if(filterStrategy === 'filter'){
                    criterion = filterCriterion.trim();
                }
                else{
                    criterion = filterCriterion;
                }

                var items = [];
                if(criterion){

                    if(filterStrategy === 'filter'){
                        if(!filtered.filterFunction){
                            throw("Attempted to use 'filter' function, but none was defined");
                        }

                        var filterFunction = filtered.filterFunction(criterion);
                        items = collection.filter(filterFunction);
                    }
                    else{
                        items = collection.where(criterion);
                    }

                }
                else{
                    items = collection.models;
                }

                // Store current criterion
                filtered._currentCriterion = criterion;
                return items;
            };

        }

    });

});