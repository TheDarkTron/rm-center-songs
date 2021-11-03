// ==UserScript==
// @name         RM Center Songs
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Center the song and show panels on RM.FM
// @author       TheDarkTron
// @license      MIT
// @match        https://www.rm.fm/*/feed
// @icon         https://www.google.com/s2/favicons?domain=rm.fm
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

GM_addStyle (`
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
