function e(e,t,n,o){Object.defineProperty(e,t,{get:n,set:o,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in a){var t=a[e];delete a[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},n.parcelRequired7c6=r),r.register("kyEFX",(function(t,n){var o,a;e(t.exports,"register",(function(){return o}),(function(e){return o=e})),e(t.exports,"resolve",(function(){return a}),(function(e){return a=e}));var r={};o=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},a=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r("kyEFX").register(JSON.parse('{"5ZPII":"index.b71a30e6.js","lHNsM":"no-poster-available1.dcec566b.jpg","15rT1":"no-poster-available.c6ce9600.jpg","eolba":"Nastya Ovcharenko.17780b78.jpg","hLgJL":"Iryna.e1b41250.jpg","cATC2":"Kuts Mykola1.ddafc7bd.jpg","9Z8SD":"Nataliia Matsko2.ed1f7f9d.jpg","g1wg2":"Ruslan.6e7f52f7.jpg","7MXXl":"Vadym.301aaf00.jpg","kzZkq":"Anastasiia.85c546c2.jpg","b9auz":"index.45b605d5.js"}')),r("dZ4pE"),r("bTcpz"),r("ip4d8"),r("darZD"),r("6Xkfo");var i=r("darZD"),s=(i=r("darZD"),r("7Y9D8"));const l=new(0,r("g0KQk").default);let c="";const d=document.querySelector(".form"),p=document.querySelector(".header_search-input");d.addEventListener("submit",(async function(e){if(e.preventDefault(),c=p.value.trim(),!c)return t(s).Notify.failure("Please enter a search query for the movie");try{l.searchQuery=c;const{data:e}=await l.getSearchMovie(c);if(0===e.results.length)return void t(s).Notify.failure("Sorry, there are no films matching your search query. Please try again.");t(s).Notify.success("Hooray! We found something interesting for you :)"),(0,i.default)(e.results)}catch(e){t(s).Notify.failure("Search result not successfull. Enter the correct movie name."),console.log(e.message)}}));const y=new(0,r("g0KQk").default);let u;const f={collection:document.querySelector(".collection"),pagination:document.querySelector(".pagination"),btnLeft:document.querySelector(".btn-left"),secondLeft:document.querySelector(".second-left"),firstLeft:document.querySelector(".first-left"),current:document.querySelector(".current"),firstRight:document.querySelector(".first-right"),secondRight:document.querySelector(".second-right"),btnRight:document.querySelector(".btn-right")};async function g(e){if(f.collection.innerHTML="",f.pagination.style.display="none",y.page=Number(e.currentTarget.textContent),y.searchQuery=c,c)try{const{data:e}=await y.getSearchMovie(c);u=e.total_pages,(0,i.default)(e.results)}catch(e){return void console.log(e.message)}else try{const{data:e}=await y.getTrendMovies();u=e.total_pages,(0,i.default)(e.results)}catch(e){return void console.log(e.message)}f.current.textContent=y.page,f.firstLeft.textContent=Number(f.current.textContent)-1,f.firstRight.textContent=Number(f.current.textContent)+1,f.secondLeft.textContent=Number(f.current.textContent)-2,f.secondRight.textContent=Number(f.current.textContent)+2,f.pagination.style.display="flex",f.firstRight.style.display="flex",f.secondRight.style.display="flex",f.btnRight.style.display="flex",f.firstLeft.style.display="flex",f.secondLeft.style.display="flex",f.btnLeft.style.display="flex",1===y.page?(f.firstLeft.style.display="none",f.secondLeft.style.display="none",f.btnLeft.style.display="none"):2===y.page?f.secondLeft.style.display="none":y.page===u?(f.firstRight.style.display="none",f.secondRight.style.display="none",f.btnRight.style.display="none"):y.page===u-1&&(f.secondRight.style.display="none")}f.btnLeft.addEventListener("click",(async function(e){if(f.collection.innerHTML="",f.pagination.style.display="none",y.page=Number(f.current.textContent)-1,y.searchQuery=c,c)try{const{data:e}=await y.getSearchMovie(c);u=e.total_pages,(0,i.default)(e.results)}catch(e){return void console.log(e.message)}else try{const{data:e}=await y.getTrendMovies();u=e.total_pages,(0,i.default)(e.results)}catch(e){return void console.log(e.message)}f.current.textContent=y.page,f.firstLeft.textContent=Number(f.current.textContent)-1,f.firstRight.textContent=Number(f.current.textContent)+1,f.secondLeft.textContent=Number(f.current.textContent)-2,f.secondRight.textContent=Number(f.current.textContent)+2,f.pagination.style.display="flex",f.firstRight.style.display="flex",f.secondRight.style.display="flex",f.btnRight.style.display="flex",f.firstLeft.style.display="flex",f.secondLeft.style.display="flex",f.btnLeft.style.display="flex",1===y.page?(f.btnLeft.style.display="none",f.secondLeft.style.display="none",f.firstLeft.style.display="none"):2===y.page?f.secondLeft.style.display="none":y.page===u-1&&(f.secondRight.style.display="none")})),f.btnRight.addEventListener("click",(async function(e){if(f.collection.innerHTML="",f.pagination.style.display="none",y.page=Number(f.current.textContent)+1,y.searchQuery=c,c)try{const{data:e}=await y.getSearchMovie(c);u=e.total_pages,(0,i.default)(e.results)}catch(e){return void console.log(e.message)}else try{const{data:e}=await y.getTrendMovies();u=e.total_pages,(0,i.default)(e.results)}catch(e){return void console.log(e.message)}f.current.textContent=y.page,f.firstLeft.textContent=Number(f.current.textContent)-1,f.firstRight.textContent=Number(f.current.textContent)+1,f.secondLeft.textContent=Number(f.current.textContent)-2,f.secondRight.textContent=Number(f.current.textContent)+2,f.pagination.style.display="flex",f.firstRight.style.display="flex",f.secondRight.style.display="flex",f.btnRight.style.display="flex",f.firstLeft.style.display="flex",f.secondLeft.style.display="flex",f.btnLeft.style.display="flex",y.page===y.total_pages?(f.btnRight.style.display="none",f.secondRight.style.display="none",f.firstRight.style.display="none"):y.page===u-1?f.secondRight.style.display="none":2===y.page&&(f.secondLeft.style.display="none")})),f.firstLeft.addEventListener("click",g),f.firstRight.addEventListener("click",g),f.secondLeft.addEventListener("click",g),f.secondRight.addEventListener("click",g),async function(){f.pagination.style.display="none";try{const{data:e}=await y.getTrendMovies();u=e.total_pages,(0,i.default)(e.results)}catch(e){return void console.log(e.message)}f.pagination.style.display="flex",f.btnLeft.style.display="none",f.secondLeft.style.display="none",f.firstLeft.style.display="none"}();var v;v=new URL(r("kyEFX").resolve("lHNsM"),import.meta.url).toString();var h;h=new URL(r("kyEFX").resolve("15rT1"),import.meta.url).toString();var m;m=new URL(r("kyEFX").resolve("eolba"),import.meta.url).toString();var L;L=new URL(r("kyEFX").resolve("hLgJL"),import.meta.url).toString();var b;b=new URL(r("kyEFX").resolve("cATC2"),import.meta.url).toString();var x;x=new URL(r("kyEFX").resolve("9Z8SD"),import.meta.url).toString();var R;R=new URL(r("kyEFX").resolve("g1wg2"),import.meta.url).toString();var w;w=new URL(r("kyEFX").resolve("7MXXl"),import.meta.url).toString();var _;_=new URL(r("kyEFX").resolve("kzZkq"),import.meta.url).toString();const S=[{id:1,name:"Stanislav Zaliskyi",photoPreview:`${t(v)}`,photo:`${t(h)}`,position:"Team Lead"},{id:2,name:"Nastya Ovcharenko",photoPreview:`${t(m)}`,photo:`${t(h)}`,position:"Scrum Master"},{id:3,name:"Serhii Lytvynenko",photoPreview:`${t(v)}`,photo:`${t(h)}`,position:"Developer"},{id:4,name:"Iryna Borysova",photoPreview:`${t(L)}`,photo:`${t(h)}`,position:"Developer"},{id:5,name:"Mykola Kuts",photoPreview:`${t(b)}`,photo:`${t(h)}`,position:"Developer"},{id:6,name:"Nataliia Matsko",photoPreview:`${t(x)}`,photo:`${t(h)}`,position:"Developer"},{id:7,name:"Ruslan Borysevych",photoPreview:`${t(R)}`,photo:`${t(h)}`,position:"Developer"},{id:8,name:"Alona Neshodym",photoPreview:`${t(v)}`,photo:`${t(h)}`,position:"Developer"},{id:9,name:"Vadym Kolisnyk",photoPreview:`${t(w)}`,photo:`${t(h)}`,position:"Developer"},{id:10,name:"Anastasiia Berehovyh",photoPreview:`${t(_)}`,photo:`${t(h)}`,position:"Developer"},{id:11,name:"Taras Fedak",photoPreview:`${t(v)}`,photo:`${t(h)}`,position:"Developer"},{id:12,name:"Tetiana Asadova",photoPreview:`${t(v)}`,photo:`${t(h)}`,position:"Developer"},{id:13,name:"Oleksii Mikhieiev",photoPreview:`${t(v)}`,photo:`${t(h)}`,position:"Developer"}],k={openModalBtn:document.querySelector('[data-action="open-modal"]'),closeModalBtn:document.querySelector('[data-action="close-modal"]'),backdrop:document.querySelector(".js-team-backdrop"),galleryTeam:document.querySelector(".gallery__team")};function E(){window.removeEventListener("keydown",C),document.body.classList.remove("show-modal")}function C(e){"Escape"===e.code&&E()}k.openModalBtn.addEventListener("click",(function(e){e.preventDefault(),window.addEventListener("keydown",C),document.body.classList.add("show-modal"),function(e){const t=e.reduce(((e,{name:t,photoPreview:n,position:o,photo:a})=>e+` <li class="dev__item">\n               <a class="dev__link" >\n                <img src="${n}" alt="${t}" class="dev__img"/>\n                  <div class="dev__info">\n                    <div class="dev__content">\n                        <h2 class="dev__name">${t}</h2>                  \n                        <p class="dev__position">${o}</p>\n                    </div>\n                  </div>\n              </a>\n            </li>\n          `),"");k.galleryTeam.innerHTML=t}(S)})),k.closeModalBtn.addEventListener("click",E),k.backdrop.addEventListener("click",(function(e){e.currentTarget===e.target&&E()}));
//# sourceMappingURL=index.b71a30e6.js.map
