// ==UserScript==
// @name         Wide StackOverflow
// @namespace    https://openuserjs.org/users/TheDarkTron
// @version      1.0
// @description  Make StackOverflow great again! Display StackOverflow at 90% width.
// @author       TheDarkTron
// @license      MIT
// @updateURL    https://openuserjs.org/meta/TheDarkTron/Wide_StackOverflow.meta.js
// @downloadURL  https://openuserjs.org/install/TheDarkTron/Wide_StackOverflow.user.js
// @copyright    2021, TheDarkTron (https://openuserjs.org/users/TheDarkTron)
// @homepageURL  https://github.com/TheDarkTron/userscripts
// @match        *://stackoverflow.com/*
// @match        *://*.stackexchange.com/*
// @icon         https://cdn.sstatic.net/Sites/stackoverflow/Img/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.querySelector('body > div.container').setAttribute('style', 'max-width: 90%');
  document.querySelector('#content').setAttribute('style', 'max-width: 90%');
})();
