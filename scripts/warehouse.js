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

    WareHouse.prototype.printOrders = function() {

        // first, get all the email addresses (keys)
        let customerIdArray = Object.keys(this.db.getAll());

        console.log('WareHouse#' + this.wareHouseId + ' has pending orders:');
        //go through the list of emails and get the associated order
        customerIdArray.forEach(function (id ){
            console.log(this.db.get(id));
        }.bind(this));
    }

    App.WareHouse = WareHouse;
    window.App = App;

})(window);