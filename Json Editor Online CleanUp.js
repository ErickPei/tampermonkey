// ==UserScript==
// @name        Json Editor Online CleanUp
// @namespace   Json Editor Online CleanUp
// @include     https://jsoneditoronline.org/
// @version     1
// @grant       none
// ==/UserScript==
var removables = ['ads', 'ad-panel'];//add more id's here following the pattern
for (var i = 0; i < removables.length; i++) {
  var element = document.getElementsByClassName(removables[i]);
  if (element) {
    console.log('remove div is ', element[0])
    element[0].parentNode.removeChild(element[0]);
  }
}
