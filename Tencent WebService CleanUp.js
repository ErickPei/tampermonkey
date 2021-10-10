// ==UserScript==
// @name        Tencent WebService CleanUp
// @namespace   Tencent WebService CleanUp
// @match       https://lbs.qq.com/*
// @version     1
// @grant       none
// ==/UserScript==

setTimeout(() => {
    document.getElementsByClassName('tlbs-page-header')[0].style.visibility = 'hidden'
}, 10);
