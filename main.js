!function(e){var t={};function n(o){if(t[o])return t[o].exports;var c=t[o]={i:o,l:!1,exports:{}};return e[o].call(c.exports,c,c.exports,n),c.l=!0,c.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(o,c,function(t){return e[t]}.bind(null,c));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const o=()=>{event.target.classList.add("active");document.querySelector("#main").textContent="Home"},c=()=>{event.target.classList.add("active");document.querySelector("#main").textContent="Menu"},r=()=>{event.target.classList.add("active");document.querySelector("#main").textContent="About"},a=()=>{event.target.classList.add("active");document.querySelector("#main").textContent="Contact"};(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="heading",t.textContent="Clumsy's Restaurant",e.appendChild(t)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="tab-div";const n=document.createElement("div");n.id="home-tab",n.classList.add("tabs"),n.textContent="Home";const o=document.createElement("div");o.id="menu-tab",o.classList.add("tabs"),o.textContent="Menu";const c=document.createElement("div");c.id="contact-tab",c.classList.add("tabs"),c.textContent="Contact";const r=document.createElement("div");r.id="about-tab",r.classList.add("tabs"),r.textContent="About",t.appendChild(n),t.appendChild(o),t.appendChild(c),t.appendChild(r),e.appendChild(t)})(),(()=>{const e=document.querySelector("#home-tab"),t=document.querySelector("#menu-tab"),n=document.querySelector("#about-tab"),d=document.querySelector("#contact-tab");document.querySelectorAll(".tabs").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")})})}),e.addEventListener("click",o),t.addEventListener("click",c),n.addEventListener("click",r),d.addEventListener("click",a)})()}]);