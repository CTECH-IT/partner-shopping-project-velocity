(function (window) {
    'use strict';

    let App = window.App || {};
    let $ = window.jQuery;

    function CheckList(selector) {
        if (!selector) {
            throw new Error('NO selector provided');
        }

        this.$element = $(selector);
        if (this.$element.length == 0) {
            throw new Error('Could not find element with selector: ' + selector);
        }
    }

    CheckList.prototype.addClickHandler = function (func) {
        this.$element.on('click', 'input', function (event) {
            var email = event.target.value;
            this.removeRow(email);
            func(email);
        }.bind(this));
    };

    CheckList.prototype.removeRow = function (email) {
        this.$element
            .find('[value="' + email + '"]')
            .closest('[data-track-order="checklist"]')
            .remove();
    };

    CheckList.prototype.addRow = function (trackOrder) {
        this.removeRow(trackOrder.emailAddress);
        // create new instance of row with parameter coffee order
        var rowElement = new Row(trackOrder);
        //add new instance of row to checklist
        this.$element.append(rowElement.$element);
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

        let description = trackOrder.shirtSize + ' ';
        description += trackOrder.pantSize + ' ';
        if (trackOrder.windBreaker) {
            description += trackOrder.windBreaker + ' ';
        }
        if (trackOrder.shortSleeve) {
            description += trackOrder.shortSleeve + ' ';
        }
        if (trackOrder.longSleeve) {
            description += trackOrder.longSleeve + ' ';
        }
        if (trackOrder.hat) {
            description += trackOrder.hat + ' ';
        }
        if (trackOrder.trackPants) {
            description += trackOrder.trackPants + ' ';
        }
        if (trackOrder.sweatShirt) {
            description += trackOrder.sweatShirt + ' ';
        }
        description += ' (' + trackOrder.emailAddress + ')';

        $label.append($checkbox);
        $label.append(description);
        $div.append($label);

        this.$element = $div;
    }

    App.CheckList = CheckList;
    window.App = App;

})(window);
