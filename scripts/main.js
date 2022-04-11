(function(window){
    'use strict';

    let App = window.App;
    let WareHouse = App.WareHouse
    let DataStore = App.DataStore;

    let myWareHouse = new WareHouse('12345', new DataStore());
    window.myWareHouse = myWareHouse;

})(window);
