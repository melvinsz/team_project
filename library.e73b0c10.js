!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){i[e]=t},t.parcelRequired7c6=r),r.register("hsiym",(function(t,n){var i=r("68nu4"),d=r("6JpON"),a=r("cykCC"),o={btnWatched:document.querySelector("#btnWatched"),btnQueued:document.querySelector("#btnQueued"),pgntPanel:document.querySelector(".pagination-l")},l=document.querySelector(".collection");o.btnWatched.addEventListener("click",(function(){if(o.btnQueued.classList.remove("active-btn"),o.btnWatched.classList.add("active-btn"),l.innerHTML="",!u||0===u.length)return o.pgntPanel.classList.add("hidden"),void e(d).Notify.failure("Sorry, there are no films.");o.pgntPanel.classList.remove("hidden"),e(d).Notify.success("You already watched it :)"),(0,i.default)(u)})),o.btnQueued.addEventListener("click",(function(){if(o.btnQueued.classList.add("active-btn"),o.btnWatched.classList.remove("active-btn"),l.innerHTML="",!s||0===s.length)return o.pgntPanel.classList.add("hidden"),void e(d).Notify.failure("Sorry, there are no films.");o.pgntPanel.classList.remove("hidden"),e(d).Notify.success("Hooray! There are something interesting for you :)"),(0,i.default)(s)}));var s=a.default.load("queue-movies"),u=a.default.load("watched-films");if(!u||0===u.length)return o.pgntPanel.classList.add("hidden"),void e(d).Notify.failure("Sorry, there are no films.");(0,i.default)(u)})),r("f8BaH"),r("5xtVg"),r("e9aZl"),r("9zCHX"),r("9hReV"),r("hsiym"),r("gklAf")}();
//# sourceMappingURL=library.e73b0c10.js.map
