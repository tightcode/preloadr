/* Preloadr 0.2.8 ( https://github.com/tightcode/preloadr ) */
(function() {
  "use strict";
  var loadr = document.querySelector("#loader");
  var loadrImg = document.querySelector("#loader img");
  var wrappr = document.querySelector("#wrapper");
  var preloadImg = document.createElement("img");
  preloadImg.src = loadrImg.src;
  loadrImg.classList.add("removed");
  document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.remove("loading");
    if (document.body.classList.length === 0) {
      document.body.removeAttribute("class");
    }
    wrappr.classList.remove("hidden");
    if (wrappr.classList.length === 0) {
      wrappr.removeAttribute("class");
    }
  });
  preloadImg.onload = function() {
    document.body.classList.remove("overflow");
    loadrImg.classList.remove("removed", "hidden");
  };
  window.onload = function() {
    loadr.classList.remove("visible");
    setTimeout(function() {
      document.body.removeChild(loadr);
    }, 3000);
  };
}());