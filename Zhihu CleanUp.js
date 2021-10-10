// ==UserScript==
// @name        Zhihu CleanUp
// @namespace   Zhihu CleanUp
// @match       https://www.zhihu.com/*
// @version     1
// @grant       none
// ==/UserScript==

//var element_main = document.getElementsByClassName("Question-main");
//if (element_main) {
//    element_main[0].style.width = '100%';
//    element_main[0].style.marginLeft = '150px';
//}

var element_inner = document.getElementsByClassName("Question-mainColumn");
if (element_inner) {
    element_inner[0].style.width = 'auto';
}

setTimeout(() => {
    document.getElementsByClassName('Question-sideColumn')[0].style.visibility = 'hidden'
    document.getElementsByClassName('ColumnPageHeader')[0].style.visibility = 'hidden'
    document.getElementsByClassName('AppHeader')[0].style.visibility = 'hidden'
    document.getElementsByClassName('PageHeader')[0].style.visibility = 'hidden'
}, 10);

setTimeout(() => {
    document.getElementsByClassName('Sticky')[0].style.visibility = 'hidden'
}, 10);

var els = document.getElementsByClassName('VoteButton')
console.log(els)
for (var i in els) {
    els[i].style.visibility = 'hidden'
}
