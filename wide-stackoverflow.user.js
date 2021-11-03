// ==UserScript==
// @name         Wide StackOverflow
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Make StackOverflow great again! Display StackOverflow at 90% width.
// @author       TheDarkTron
// @license      MIT
// @match        *://stackoverflow.com/*
// @match        *://*.stackexchange.com/*
// @icon         https://www.google.com/s2/favicons?domain=stackoverflow.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('body > div.container').setAttribute('style', 'max-width: 90%');
    document.querySelector('#content').setAttribute('style', 'max-width: 90%');
})();
