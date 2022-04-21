const CHECKLIST_SELECTOR = '[data-track-order="checklist"]'; 
const FORM_SELECTOR = '[data-apparel-order="form"]';
const SERVER_URL = 'http://saturn.rochesterschools.org:8080/json'; 

(function (window) {
    'use strict';

    let App = window.App;
    let WareHouse = App.WareHouse;
    let DataStore = App.DataStore;
    let FormHandler = App.FormHandler;
    let Validation = App.Validation; 


    let myWareHouse = new WareHouse('111',new DataStore());
    window.myWareHouse = myWareHouse;

    let formHandler = new FormHandler(FORM_SELECTOR);
    formHandler.addSubmitHandler(myWareHouse.createOrder.bind(myWareHouse));
    console.log(formHandler);

})(window);






(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });




    // Product Quantity
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);


