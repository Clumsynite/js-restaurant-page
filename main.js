!function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";a.r(t);const n=()=>{event.target.classList.add("active");const e=document.querySelector("#main"),t=document.createElement("div");t.innerHTML="\n    <strong>Dou you love Indian dishes?</strong><br/>\n    Wanna eat some <strong>Delicious</strong> Indian food?<br/>\n    Look at the <span id='menu-link' class='link'>Menu</span>\n    <br/><br/>\n    Wanna contact me for a huge order?<br/>\n    Look <span id='contact-link' class='link'>here</span> my guy\n    <br/><br/>\n    Curious who made this awesome page?<br/>\n    <span id='about-link' class='link'>Here I am</span>\n  ",e.appendChild(t),document.querySelector("#menu-link").addEventListener("click",()=>{document.querySelector("#menu-tab").click()}),document.querySelector("#contact-link").addEventListener("click",()=>{document.querySelector("#contact-tab").click()}),document.querySelector("#about-link").addEventListener("click",()=>{document.querySelector("#about-tab").click()})},o=()=>{event.target.classList.add("active");const e=document.querySelector("#main"),t=document.createElement("div");t.id="menu-div";[{name:"Malai Kofta",src:"https://www.thespruceeats.com/thmb/DKBhs8eItHdebuYmyaglkhCKtMY=/1720x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Malai-Kofta-GettyImages-640045270-58d0064d5f9b581d72be95b6.jpg",desc:"Malai Kofta is a very popular Indian vegetarian dish where balls (kofta) made of potato and paneer are deep fried and served with a creamy and spiced tomato based curry.",price:"Rs.ABC"},{name:"Mutter Paneer",src:"https://www.thespruceeats.com/thmb/Vux6Ye7xKJ3jLUz04loqHhen1uU=/856x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Mutter-Paneer-GettyImages-670907161-58d00a633df78c3c4f3b9bb2.jpg",desc:"Mutter means peas, and paneer is a solid cottage cheese, so this mutter paneer dish combines the two in a rich tomato-based gravy with a touch of cream. ",price:"Rs.DEF"},{name:"Chana Masala",src:"https://www.seriouseats.com/recipes/images/2016/03/20160328-channa-masala-recipe-6-750x563.jpg",desc:"This Punjabi Chana Masala or Chole Masala is an authentic North Indian style Chickpea Curry made with white chickpeas, freshly powdered spices, onions, tomatoes and herbs.",price:"Rs.GHI"},{name:"Dum Aloo",src:"https://i2.wp.com/pipingpotcurry.com/wp-content/uploads/2018/05/Dum-Aloo-@minsterypippingpotcurry.jpg",desc:"A North Indian favorite curry made with baby potatoes sautéed in onion and tomato sauce. Dum Aloo goes well with hot butter naan, roti or paratha. It can be easily made in a pressure cooker",price:"Rs.JKL"},{name:"Pav Bhaji",src:"https://www.awesomecuisine.com/wp-content/uploads/2007/11/pav_bhaji_recipe.jpg",desc:"A favourite Indian street food, Pav Bhaji is made with potatoes and vegetables cooked in a tomato base, and enjoyed with pav or dinner rolls. This one-pot version of Pav Bhaji made in the Instant Pot has made it a popular weeknight dinner for many.",price:"Rs.MNO"},{name:"Paneer Biriyani",src:"https://i2.wp.com/pipingpotcurry.com/wp-content/uploads/2018/06/Ministry-of-Curry-Paneer-Biryani-in-Instant-Pot-.jpg",desc:"A classic Indian dish made with flavourful and aromatic basmati rice, along with whole spices and garam masala. Lots of veggies and paneer make this a complete meal, which pairs well with yogurt or raita.",price:"Rs.PQR"},{name:"Lemon Rice",src:"https://www.cookwithmanali.com/wp-content/uploads/2016/01/South-Indian-Lemon-Rice-Recipe-500x500.jpg",desc:"a flavorful, tangy and crunchy Lemon Rice from South India. Aromatic Basmati Rice flavored with lemon juice, mustard seeds, ginger and topped with roasted peanuts. It takes less than 30 minutes to make this delicious rice in your instant pot.",price:"Rs.STU"},{name:"Misal Pav",src:"https://i2.wp.com/pipingpotcurry.com/wp-content/uploads/2019/04/Misal-Pav-Instant-Pot-1.jpg",desc:"A delicious Maharashtrain breakfast, Misal Pav is a spicy sprouts curry made in the instant pot. Misal Pav is a wholesome meal, that can be enjoyed as a nutritious breakfast or brunch.",price:"Rs.VWX"},{name:"Rajma Masala",src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_pah-nrffYz8onHDkzR0OtU0cYuWeM8dlB4Cw4CKaKNZtc5w&s",desc:"Rajma Masala or Vegan Red Kidney Beans Curry is one of the most loved Punjabi dishes.  It is a great comfort food enjoyed with rice or roti.  Here you will find how to make Rajma in Instant Pot along with pot-in-pot Brown Rice for a complete meal.",price:"YZ"}].forEach(e=>{const a=document.createElement("div");a.classList.add("card");const n=document.createElement("img");n.src=e.src,n.classList.add("card-img");const o=document.createElement("div");o.classList.add("card-detail");const i=document.createElement("div");i.classList.add("card-title"),i.textContent=e.name;const r=document.createElement("div");r.classList.add("card-price"),r.textContent=e.price;const c=document.createElement("div");c.classList.add("card-desc"),c.textContent=e.desc,o.appendChild(i),o.appendChild(r),o.appendChild(c),a.appendChild(n),a.appendChild(o),t.appendChild(a)}),e.appendChild(t)},i=()=>{event.target.classList.add("active");const e=document.querySelector("#main"),t=document.createElement("div");t.innerHTML="\n    Hi, I am <strong>Clumsyknight</strong>, the guy who developed this page\n    <br/><br/>\n    You can view my github profile <a href='https://github.com/Clumsynite' target='_blank' class='jump-link'>here</a>\n    <br/><br/>\n    Or, you can look at code <a href='https://github.com/Clumsynite/js-restaurant-page' target='_blank' class='jump-link'>here</a>\n  ",e.appendChild(t)},r=()=>{event.target.classList.add("active");const e=document.querySelector("#main"),t=document.createElement("div");t.id="contact-div";t.innerHTML="\n    <div>\n    <strong>Clumsyknight's Restaurant</strong>\n    </div>\n    <div>\n    <strong>Location:</strong> Mumbai, Maharashtra, India \n    </div>\n    <div>\n    <strong>Contact:</strong> You know this isn't real, right? \n    </div>\n  ",e.appendChild(t)};(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="heading",t.textContent="Clumsy's Restaurant",e.appendChild(t)})(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.id="tab-div";const a=document.createElement("div");a.id="home-tab",a.classList.add("tabs"),a.textContent="Home";const n=document.createElement("div");n.id="menu-tab",n.classList.add("tabs"),n.textContent="Menu";const o=document.createElement("div");o.id="contact-tab",o.classList.add("tabs"),o.textContent="Contact";const i=document.createElement("div");i.id="about-tab",i.classList.add("tabs"),i.textContent="About",t.appendChild(a),t.appendChild(n),t.appendChild(o),t.appendChild(i),e.appendChild(t)})(),(()=>{const e=document.querySelector("#home-tab"),t=document.querySelector("#menu-tab"),a=document.querySelector("#about-tab"),c=document.querySelector("#contact-tab"),s=document.querySelectorAll(".tabs"),d=document.querySelector("#main");s.forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll(".active").forEach(e=>{e.classList.remove("active")}),l()})});const l=()=>{if(d.hasChildNodes())for(;d.hasChildNodes();)d.removeChild(d.lastChild)};e.addEventListener("click",n),t.addEventListener("click",o),a.addEventListener("click",i),c.addEventListener("click",r)})(),document.querySelector("#home-tab").click()}]);