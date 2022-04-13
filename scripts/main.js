(function (window) {
    'use strict';

    let App = window.App;
    let WareHouse = App.WareHouse;
    let DataStore = App.DataStore;

    let myWareHouse = new WareHouse('111',new App.DataStore());

    window.myWareHouse = myWareHouse;

})(window);
