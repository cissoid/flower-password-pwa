const flowerpass = require('flowerpass');

require('style.scss');

function calc() {
    const passwd = document.querySelector('#passwd').value;
    const salt = document.querySelector('#salt').value;
    const result = flowerpass(passwd, salt);
    document.querySelector('#result').innerText = result;
}

function copy() {
    const textArea = document.createElement('textarea');
    textArea.value = document.querySelector('#result').innerText;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textArea);
    document.querySelector('#copy-button').value = 'Copyed!!';
}

window.addEventListener('load', function() {
    document.querySelector('#passwd').addEventListener('keyup', calc);
    document.querySelector('#salt').addEventListener('keyup', calc);
    document.querySelector('#copy-button').addEventListener('click', copy);
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js').then(() => {
        console.log('service worker registered');
    });
}
