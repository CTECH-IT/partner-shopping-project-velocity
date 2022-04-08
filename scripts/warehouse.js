(function(window){
    'use strict'

    let App = window.App || {};

    function WareHouse(wareHouseId,db){
        this.wareHouseId = wareHouseId;
        this.db = db;
    }

    WareHouse.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    }

    WareHouse.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for '+customerId);
        this.db.remove(customerId);
    }

    App.WareHouse = WareHouse;
    window.App = App;

})(window);