// ==UserScript==
// @name        wechat mp CleanUp
// @namespace   wechat mp CleanUp
// @match       https://mp.weixin.qq.com/*
// @version     1
// @grant       none
// ==/UserScript==

setTimeout(() => {
    document.getElementsByClassName('qr_code_pc')[0].style.visibility = 'hidden'
}, 10);
