const jQuery = require('jquery');

const flowerpass = require('flowerpass');

require('style.scss');

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

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/static/scripts/service-worker.js').then(() => {
        console.log('service worker registered');
    });
}
