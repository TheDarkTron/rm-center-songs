// ==UserScript==
// @name         BBB Hide Users
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Adds a button next to the "show users" button so you can hide the users list without hiding the public chat in Big Blue Button video conferences
// @author       TheDarkTron
// @license      MIT
// @updateURL    https://openuserjs.org/meta/TheDarkTron/BBB_Hide_Users.meta.js
// @downloadURL  https://openuserjs.org/install/TheDarkTron/BBB_Hide_Users.user.js
// @copyright    2021, TheDarkTron (https://openuserjs.org/users/TheDarkTron)
// @homepageURL  https://github.com/TheDarkTron/userscripts
// @match        *://*/html5client/join?sessionToken=*
// @icon         https://www.google.com/s2/favicons?domain=bigbluebutton.org
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  function toggleDisplay(element) {
    if (element.style.display === 'none') {
      element.style.display = null;
    } else {
      element.style.display = 'none';
    }
  }

  // wait till bbb ajax calls are ready
  setTimeout(function() {
    // add button
    // old bbb version
    let orgButton = document.querySelector('#app > main > section button[aria-label="Users and messages toggle"');
    // new bbb version
    if (!orgButton) {
      orgButton = document.querySelector('#tippy-2');
    }

    let button = orgButton.cloneNode(true);
    button.children[1].innerText = 'Hide Users';
    button.children[0].style.color = 'darkgoldenrod';
    button.setAttribute('aria-label', 'Hide Users');

    button.addEventListener('click', function() {
      // first is for new bbb second is for old bbb
      const userList = document.querySelector('#layout > div:nth-child(1)') ?? document.querySelector('main > section > div:nth-child(1)');
      const chat = document.querySelector('#layout > div:nth-child(2)') ?? document.querySelector('main > section > div:nth-child(3)');

      // toggle chat distance to left
      let oldLeft = 0;
      if (chat.style.left !== 0) {
        oldLeft = chat.style.left;
        chat.style.left = 0;
      } else {
        chat.style.left = oldLeft;
      }

      toggleDisplay(userList);
    })

    orgButton.parentNode.appendChild(button);
  }, 3000);
})();
