// ==UserScript==
// @name         RM Center Songs
// @namespace    https://openuserjs.org/users/TheDarkTron
// @version      1.1
// @description  Center the song and show panels on RM.FM
// @author       TheDarkTron
// @license      MIT
// @updateURL    https://openuserjs.org/meta/TheDarkTron/RM_Center_Songs.meta.js
// @downloadURL  https://openuserjs.org/install/TheDarkTron/RM_Center_Songs.user.js
// @copyright    2021, TheDarkTron (https://openuserjs.org/users/TheDarkTron)
// @homepageURL  https://github.com/TheDarkTron/userscripts
// @match        https://www.rm.fm/*/feed
// @icon         https://www.rm.fm/favicon.ico
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

/* jshint esversion: 6 */

GM_addStyle(`
    rm-track > div {
        left: 25%;
        width: 330px;
        position: relative;
    }

    rm-show > div {
        left: 25%;
        width: 330px;
        position: relative;
    }
`);
