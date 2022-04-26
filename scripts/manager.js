const CHECKLIST_SELECTOR = '[data-track-order="checklist"]';
const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json';

(function (window) {
    'use strict';

    let App = window.App;
    let WareHouse = App.WareHouse;
    let RemoteDataStore = App.RemoteDataStore;
    let CheckList = App.CheckList;

    let remoteDS = new RemoteDataStore(SERVER_URL);
    window.remoteDS = remoteDS;


    let myWareHouse = new WareHouse('111', remoteDS);
    window.myWareHouse = myWareHouse;

    // find the checklist that is being updated and create a Checklist object
    let checkList = new CheckList(CHECKLIST_SELECTOR);

    checkList.addRow.call(checkList, remoteDS);

    checkList.addClickHandler(myWareHouse.deliverOrder.bind(myWareHouse));


})(window);

