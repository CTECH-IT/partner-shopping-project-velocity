(function (window) {
    'use strict'; 

    let App = window.App || {}; 
    let $ = window.jQuery; 

    function Checklist(selector) {
        if (!selector) {
            throw new Error('NO selector provided'); 
        }

        this.$Element = $(selector); 
        if (this.$Element.length == 0) {
            throw new Error('Could not find element with selector: ' + selector); 
        }
    }

    Checklist.prototype.addClickHandler = function (func) {
        this.$Element.on('click', 'input', function (event) {
            var email = event.target.value; 
            this.removeRow(email); 
            func(email); 
        }.bind(this)); 
    }; 

    Checklist.prototype.removeRow = function (email) {
        this.$Element
            .find('[value="' + email + '"]')
            .closest('[data-track-order="checklist"]')
            .remove(); 
    }; 

    Checklist.prototype.addRow = function (trackOrder) {
        this.removeRow(trackOrder.emailAddress); 
        // create new instance of row with parameter coffee order
        var rowElement = new Row(trackOrder); 
        //add new instance of row to checklist
        this.$Element.append(rowElement.$Element); 
    }

    function Row(trackOrder) {
        let $div = $('<div></div>', {
            'data-track-order': 'checkbox', 'class': 'checkbox'
        }); 
        let $label = $('<label></label>'); 

        let $checkbox = $('<input></input>', {
            type: 'checkbox', 
            value: trackOrder.emailAddress
        }); 

        let description = trackOrder;  
       
        $label.append($checkbox); 
        $label.append(description); 
        $div.append($label); 

        this.$Element = $div; 
    }

    App.Checklist = Checklist; 
    window.App = App; 
})(window); 

/*
let description = apparelOrder.shirtSize + ' ';
description += apparelOrder.pantSize + ' ';
if (apparelOrder.windBreaker) {
    description += apparelOrder.windBreaker + ' ';
}
if (apparelOrder.shortSleeve) {
    description += apparelOrder.shortSleeve + ' ';
}
if (apparelOrder.longSleeve) {
    description += apparelOrder.longSleeve + ' ';
}
if (apparelOrder.hat) {
    description += apparelOrder.hat + ' ';
}
if (apparelOrder.trackPants) {
    description += apparelOrder.trackPants + ' ';
}
if (apparelOrder.sweatShirt) {
    description += apparelOrder.sweatShirt + ' ';
}
description += ' (' + apparelOrder.emailAddress + ')';
*/