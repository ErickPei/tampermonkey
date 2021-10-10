// ==UserScript==
// @name        V2ex CleanUp
// @namespace   V2ex CleanUp
// @match       https://www.v2ex.com/*
// @version     1
// @grant       none
// ==/UserScript==
var element = document.getElementById('Rightbar');
if (element) {
    element.parentNode.removeChild(element);
}

var el_top = document.getElementById('Top');
if (el_top) {
    el_top.parentNode.removeChild(el_top);
}

var el_bottom = document.getElementById('Bottom');
if (el_bottom) {
    el_bottom.parentNode.removeChild(el_bottom);
}


var el_main = document.getElementById('Main');
if (el_main) {
    el_main.style.width = '100%';
}
