(function(window){
    'use strict';

    let App = window.App;
    let WareHouse = App.WareHouse;
    let DataStore = App.DataStore;

    let myWareHouse = new WareHouse('1', new DataStore());
    window.myWareHouse = myWareHouse;

})(window);
