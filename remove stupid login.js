// ==UserScript==
// @name         去除知乎登陆弹窗 remove stupid login window on zhihu.com
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  fuck zhihu.com
// @author       mistwave
// @match        https://www.zhihu.com/*
// @grant        none
// ==/UserScript==
(function() {
    'use strict';
    new MutationObserver(function(mutations) {
        const button = document.querySelector('.signFlowModal button.Modal-closeButton')
        if (button) {
            button.click();
           //  this.disconnect();
        }
    }).observe(document, {childList: true, subtree: true});
    // Your code here...
})();