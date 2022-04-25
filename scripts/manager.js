const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';
const CHECKLIST_SELECTOR = '[data-track-order="checklist"]';

(function (window){
    'use strict'

    let App = window.App || {};
    let RemoteDataStore = App.RemoteDataStore;
    let CheckList = App.CheckList;
    let WareHouse = App.WareHouse;



    let remoteDS = new RemoteDataStore(SERVER_URL);
    window.remoteDS = remoteDS;

    let checkList = new CheckList(CHECKLIST_SELECTOR);

    let myWareHouse = new WareHouse('111', remoteDS);
    window.myWareHouse = myWareHouse;

    checkList.addClickHandler(myWareHouse.deliverOrder.bind(myWareHouse));

    window.App = App; 

})(window)