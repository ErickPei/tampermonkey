// ==UserScript==
// @name        Zhuanlan Zhihu CleanUp
// @namespace   Zhuanlan Zhihu CleanUp
// @match       https://zhuanlan.zhihu.com/*
// @version     1
// @grant       none
// ==/UserScript==

var el_header_1 = document.getElementsByClassName('ColumnPageHeader');
if (el_header_1) {
    el_header_1[0].parentNode.removeChild(el_header_1[0]);
}
