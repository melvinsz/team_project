!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequired7c6=a),a.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function a(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return a(e[2])}return"/"}(),o[e]=t),t}})),a("iE7OH").register(JSON.parse('{"EVgbq":"index.0b8e53f0.js","i8kKm":"no-poster-available1.dcec566b.jpg","8FMua":"no-poster-available.c6ce9600.jpg","8EQ5y":"Nastya Ovcharenko.17780b78.jpg","4ZOQT":"Iryna.e1b41250.jpg","4xPaQ":"Kuts Mykola1.ddafc7bd.jpg","hnuL6":"Nataliia Matsko2.ed1f7f9d.jpg","ddD0R":"Ruslan.6e7f52f7.jpg","8oGwI":"Vadym.301aaf00.jpg","o3Z9z":"Anastasiia.85c546c2.jpg","2hvCh":"index.ecd9efc6.js"}')),a("f8BaH"),a("5xtVg"),a("8a2Wa"),a("jgRgq"),a("e9aZl");var s=a("bpxeT"),i=a("2TvXO"),c=a("jgRgq"),l=(s=a("bpxeT"),i=a("2TvXO"),c=a("jgRgq"),a("6JpON")),u=new(0,a("joACZ").default),d="",p=document.querySelector(".form"),f=document.querySelector(".header_search-input");function y(){return(y=t(s)(t(i).mark((function e(n){var r;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),d=f.value.trim()){e.next=4;break}return e.abrupt("return",t(l).Notify.failure("Please enter a search query for the movie"));case 4:return e.prev=4,u.searchQuery=d,e.next=8,u.getSearchMovie(d);case 8:if(0!==(r=e.sent.data).results.length){e.next=12;break}return t(l).Notify.failure("Sorry, there are no films matching your search query. Please try again."),e.abrupt("return");case 12:t(l).Notify.success("Hooray! We found something interesting for you :)"),(0,c.default)(r.results),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(4),t(l).Notify.failure("Search result not successfull. Enter the correct movie name."),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[4,16]])})))).apply(this,arguments)}p.addEventListener("submit",(function(e){return y.apply(this,arguments)}));var g,v=new(0,a("joACZ").default),h={collection:document.querySelector(".collection"),pagination:document.querySelector(".pagination"),btnLeft:document.querySelector(".btn-left"),secondLeft:document.querySelector(".second-left"),firstLeft:document.querySelector(".first-left"),current:document.querySelector(".current"),firstRight:document.querySelector(".first-right"),secondRight:document.querySelector(".second-right"),btnRight:document.querySelector(".btn-right")};function x(){return(x=t(s)(t(i).mark((function e(){var n;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h.pagination.style.display="none",e.prev=1,e.next=4,v.getTrendMovies();case 4:n=e.sent.data,g=n.total_pages,(0,c.default)(n.results),e.next=13;break;case 9:return e.prev=9,e.t0=e.catch(1),console.log(e.t0.message),e.abrupt("return");case 13:h.pagination.style.display="flex",h.btnLeft.style.display="none",h.secondLeft.style.display="none",h.firstLeft.style.display="none";case 17:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}function m(){return(m=t(s)(t(i).mark((function e(n){var r,o;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.collection.innerHTML="",h.pagination.style.display="none",v.page=Number(h.current.textContent)-1,v.searchQuery=d,d){e.next=19;break}return e.prev=5,e.next=8,v.getTrendMovies();case 8:r=e.sent.data,g=r.total_pages,(0,c.default)(r.results),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(5),console.log(e.t0.message),e.abrupt("return");case 17:e.next=31;break;case 19:return e.prev=19,e.next=22,v.getSearchMovie(d);case 22:o=e.sent.data,g=o.total_pages,(0,c.default)(o.results),e.next=31;break;case 27:return e.prev=27,e.t1=e.catch(19),console.log(e.t1.message),e.abrupt("return");case 31:h.current.textContent=v.page,h.firstLeft.textContent=Number(h.current.textContent)-1,h.firstRight.textContent=Number(h.current.textContent)+1,h.secondLeft.textContent=Number(h.current.textContent)-2,h.secondRight.textContent=Number(h.current.textContent)+2,h.pagination.style.display="flex",h.firstRight.style.display="flex",h.secondRight.style.display="flex",h.btnRight.style.display="flex",h.firstLeft.style.display="flex",h.secondLeft.style.display="flex",h.btnLeft.style.display="flex",1===v.page?(h.btnLeft.style.display="none",h.secondLeft.style.display="none",h.firstLeft.style.display="none"):2===v.page?h.secondLeft.style.display="none":v.page===g-1&&(h.secondRight.style.display="none");case 44:case"end":return e.stop()}}),e,null,[[5,13],[19,27]])})))).apply(this,arguments)}function b(){return(b=t(s)(t(i).mark((function e(n){var r,o;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.collection.innerHTML="",h.pagination.style.display="none",v.page=Number(h.current.textContent)+1,v.searchQuery=d,d){e.next=19;break}return e.prev=5,e.next=8,v.getTrendMovies();case 8:r=e.sent.data,g=r.total_pages,(0,c.default)(r.results),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(5),console.log(e.t0.message),e.abrupt("return");case 17:e.next=31;break;case 19:return e.prev=19,e.next=22,v.getSearchMovie(d);case 22:o=e.sent.data,g=o.total_pages,(0,c.default)(o.results),e.next=31;break;case 27:return e.prev=27,e.t1=e.catch(19),console.log(e.t1.message),e.abrupt("return");case 31:h.current.textContent=v.page,h.firstLeft.textContent=Number(h.current.textContent)-1,h.firstRight.textContent=Number(h.current.textContent)+1,h.secondLeft.textContent=Number(h.current.textContent)-2,h.secondRight.textContent=Number(h.current.textContent)+2,h.pagination.style.display="flex",h.firstRight.style.display="flex",h.secondRight.style.display="flex",h.btnRight.style.display="flex",h.firstLeft.style.display="flex",h.secondLeft.style.display="flex",h.btnLeft.style.display="flex",v.page===v.total_pages?(h.btnRight.style.display="none",h.secondRight.style.display="none",h.firstRight.style.display="none"):v.page===g-1?h.secondRight.style.display="none":2===v.page&&(h.secondLeft.style.display="none");case 44:case"end":return e.stop()}}),e,null,[[5,13],[19,27]])})))).apply(this,arguments)}function L(e){return R.apply(this,arguments)}function R(){return(R=t(s)(t(i).mark((function e(n){var r,o;return t(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h.collection.innerHTML="",h.pagination.style.display="none",v.page=Number(n.currentTarget.textContent),v.searchQuery=d,d){e.next=19;break}return e.prev=5,e.next=8,v.getTrendMovies();case 8:r=e.sent.data,g=r.total_pages,(0,c.default)(r.results),e.next=17;break;case 13:return e.prev=13,e.t0=e.catch(5),console.log(e.t0.message),e.abrupt("return");case 17:e.next=31;break;case 19:return e.prev=19,e.next=22,v.getSearchMovie(d);case 22:o=e.sent.data,g=o.total_pages,(0,c.default)(o.results),e.next=31;break;case 27:return e.prev=27,e.t1=e.catch(19),console.log(e.t1.message),e.abrupt("return");case 31:h.current.textContent=v.page,h.firstLeft.textContent=Number(h.current.textContent)-1,h.firstRight.textContent=Number(h.current.textContent)+1,h.secondLeft.textContent=Number(h.current.textContent)-2,h.secondRight.textContent=Number(h.current.textContent)+2,h.pagination.style.display="flex",h.firstRight.style.display="flex",h.secondRight.style.display="flex",h.btnRight.style.display="flex",h.firstLeft.style.display="flex",h.secondLeft.style.display="flex",h.btnLeft.style.display="flex",1===v.page?(h.firstLeft.style.display="none",h.secondLeft.style.display="none",h.btnLeft.style.display="none"):2===v.page?h.secondLeft.style.display="none":v.page===g?(h.firstRight.style.display="none",h.secondRight.style.display="none",h.btnRight.style.display="none"):v.page===g-1&&(h.secondRight.style.display="none");case 44:case"end":return e.stop()}}),e,null,[[5,13],[19,27]])})))).apply(this,arguments)}h.btnLeft.addEventListener("click",(function(e){return m.apply(this,arguments)})),h.btnRight.addEventListener("click",(function(e){return b.apply(this,arguments)})),h.firstLeft.addEventListener("click",L),h.firstRight.addEventListener("click",L),h.secondLeft.addEventListener("click",L),h.secondRight.addEventListener("click",L),function(){x.apply(this,arguments)}();var k;k=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("i8kKm");var E;E=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8FMua");var _;_=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8EQ5y");var w;w=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4ZOQT");var C;C=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("4xPaQ");var H;H=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("hnuL6");var N;N=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("ddD0R");var S;S=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("8oGwI");var q;q=a("aNJCr").getBundleURL("EVgbq")+a("iE7OH").resolve("o3Z9z");var M=[{id:1,name:"Stanislav Zaliskyi",photoPreview:"".concat(t(k)),photo:"".concat(t(E)),position:"Team Lead"},{id:2,name:"Nastya Ovcharenko",photoPreview:"".concat(t(_)),photo:"".concat(t(E)),position:"Scrum Master"},{id:3,name:"Serhii Lytvynenko",photoPreview:"".concat(t(k)),photo:"".concat(t(E)),position:"Developer"},{id:4,name:"Iryna Borysova",photoPreview:"".concat(t(w)),photo:"".concat(t(E)),position:"Developer"},{id:5,name:"Mykola Kuts",photoPreview:"".concat(t(C)),photo:"".concat(t(E)),position:"Developer"},{id:6,name:"Nataliia Matsko",photoPreview:"".concat(t(H)),photo:"".concat(t(E)),position:"Developer"},{id:7,name:"Ruslan Borysevych",photoPreview:"".concat(t(N)),photo:"".concat(t(E)),position:"Developer"},{id:8,name:"Alona Neshodym",photoPreview:"".concat(t(k)),photo:"".concat(t(E)),position:"Developer"},{id:9,name:"Vadym Kolisnyk",photoPreview:"".concat(t(S)),photo:"".concat(t(E)),position:"Developer"},{id:10,name:"Anastasiia Berehovyh",photoPreview:"".concat(t(q)),photo:"".concat(t(E)),position:"Developer"},{id:11,name:"Taras Fedak",photoPreview:"".concat(t(k)),photo:"".concat(t(E)),position:"Developer"},{id:12,name:"Tetiana Asadova",photoPreview:"".concat(t(k)),photo:"".concat(t(E)),position:"Developer"},{id:13,name:"Oleksii Mikhieiev",photoPreview:"".concat(t(k)),photo:"".concat(t(E)),position:"Developer"}],O={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-team-backdrop"),galleryTeam:document.querySelector(".gallery__team")};function T(){window.removeEventListener("keydown",j),document.body.classList.remove("show-modal")}function j(e){"Escape"===e.code&&T()}O.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",j),document.body.classList.add("show-modal"),t=M,n=t.reduce((function(e,t){var n=t.name,r=t.photoPreview,o=t.position;return t.photo,e+' <li class="dev__item">\n               <a class="dev__link" >\n                <img src="'.concat(r,'" alt="').concat(n,'" class="dev__img"/>\n                  <div class="dev__info">\n                    <div class="dev__content">\n                        <h2 class="dev__name">').concat(n,'</h2>                  \n                        <p class="dev__position">').concat(o,"</p>\n                    </div>\n                  </div>\n              </a>\n            </li>\n          ")}),""),O.galleryTeam.innerHTML=n;var t,n})),O.closeModalBtn.addEventListener("click",T),O.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&T()}))}();
//# sourceMappingURL=index.0b8e53f0.js.map