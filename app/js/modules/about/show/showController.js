define(['app', 'modules/about/show/showView'] , function (LibraryManager, View) {
    return {
        showView : function () {
            var view = new View.Message();
            LibraryManager.mainRegion.show(view);
        }
    };
});