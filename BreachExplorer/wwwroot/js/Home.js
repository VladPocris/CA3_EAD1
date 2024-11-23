﻿function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(function () {
        console.log('Text copied to clipboard');
    }).catch(function (error) {
        console.error('Error copying text: ', error);
    });
}