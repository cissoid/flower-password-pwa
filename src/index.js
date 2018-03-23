import jQuery from 'jquery';

import {
    flowerpass
} from 'flowerpass';

function calc() {
    const passwd = jQuery('#passwd').val();
    const salt = jQuery('#salt').val();
    const result = flowerpass(passwd, salt);
    jQuery('#result').html(result);
}

jQuery(function() {
    jQuery('#passwd').on('change keyup', calc);
    jQuery('#salt').on('change keyup', calc);
});
