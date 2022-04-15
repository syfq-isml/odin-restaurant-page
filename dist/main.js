/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contact": () => (/* binding */ contact)
/* harmony export */ });

const contact = (function(){

    const main = document.createElement('main');

    const firstTime = true;

    const exist = false;

    function addContact() {
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('contact-main-container');

        const textContainer = document.createElement('div');
        textContainer.classList.add('contact-text-container');

        const h1 = document.createElement('h1');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const br = document.createElement('br');
        const h2 = document.createElement('h2');
        const p3 = document.createElement('p');
        const p4 = document.createElement('p');
        const p5 = document.createElement('p');

        h1.innerText = 'Contact Us';
        p1.innerText = '📞 +65 6712 4567';
        p2.innerText = '🖂 contact@heartyramen.com';
        h2.innerText = 'Our Location';
        p3.innerText = 'Marina Bay Sands';
        p4.innerText = '10 Bayfront Avenue';
        p5.innerText = 'Singapore 019110';

        textContainer.append(h1);
        textContainer.append(p1);
        textContainer.append(p2);
        textContainer.append(br);
        textContainer.append(h2);
        textContainer.append(p3);
        textContainer.append(p4);
        textContainer.append(p5);

        const image = document.createElement('div');
        image.classList.add('contact-img-cont');

        mainContainer.append(textContainer);
        mainContainer.append(image);

        main.append(mainContainer);

    };

    return { main, firstTime, exist, addContact};


})();



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendMenu": () => (/* binding */ appendMenu),
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
const menu = (function() {

    const main = document.createElement('main');

    const firstTime = true;

    const exist = false;

    const addMenu = () => {

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    const menuItem1 = document.createElement('div');
    menuItem1.classList.add('menu-item');
    const menuItem2 = document.createElement('div');
    menuItem2.classList.add('menu-item');
    const menuItem3 = document.createElement('div');
    menuItem3.classList.add('menu-item');

    const menuPic1 = document.createElement('div');
    menuPic1.classList.add('menu-pic');
    menuPic1.setAttribute('style', 'background-image: url(./ramen-og.jpg)');
    const menuPic2 = document.createElement('div');
    menuPic2.classList.add('menu-pic');
    menuPic2.setAttribute('style', 'background-image: url(./ramen-spicy.jpg)');
    const menuPic3 = document.createElement('div');
    menuPic3.classList.add('menu-pic');
    menuPic3.setAttribute('style', 'background-image: url(./ramen-cheese.jpg)');

    const text1 = document.createElement('div');
    const h11 = document.createElement('h1');
    const p1 = document.createElement('p');
    const text2 = document.createElement('div');
    const h12 = document.createElement('h1');
    const p2 = document.createElement('p');
    const text3 = document.createElement('div');
    const h13 = document.createElement('h1');
    const p3 = document.createElement('p');

    h11.innerText = 'Original Ramen';
    p1.innerText = `This ramen is of a classic flavor; a clean broth topped with egg and meat. A taste that's familiar to everyone.`;

    h12.innerText = 'Spicy Ramen';
    p2.innerText = `Spice level that's manageable but still packs a punch, this ramen will tantalize your taste buds with an oriental twist.`;

    h13.innerText = 'Cheese Ramen';
    p3.innerText = `Feeling lazy? We'll pair that up for you with this simple yet sophisticated ramen choice. A plate to feel like home.`;


    text1.append(h11);
    text1.append(p1);
    menuItem1.append(menuPic1);
    menuItem1.append(text1);
    text2.append(h12);
    text2.append(p2);
    menuItem2.append(menuPic2);
    menuItem2.append(text2);
    text3.append(h13);
    text3.append(p3);
    menuItem3.append(menuPic3);
    menuItem3.append(text3);

    menuContainer.append(menuItem1);
    menuContainer.append(menuItem2);
    menuContainer.append(menuItem3);

    main.append(menuContainer);
    };

    return {main, firstTime, exist, addMenu};

})();

function appendMenu(element, elem) {
    element.append(elem);
}






/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




console.log('Initialising...');

const contentWrapper = document.querySelector('#content');

// --- HEADER SECTION ---

const header = document.createElement('header');

const topHeader = document.createElement('div');
topHeader.classList.add('header-top');


const topHeaderWrapper = document.createElement('div');
topHeaderWrapper.classList.add('wrapper');

const logo = document.createElement('h1');
logo.classList.add('logo');
logo.innerHTML = '<span>HEARTY</span> RAMEN</h1>';

const headerH2 = document.createElement('h2');
headerH2.innerText = ' - Soup for the soul - ';

topHeaderWrapper.append(logo);
topHeaderWrapper.append(headerH2);
topHeader.append(topHeaderWrapper);

const bottomHeader = document.createElement('div');
bottomHeader.classList.add('header-bottom');

const navList = document.createElement('ul');

const homeBtn = document.createElement('li');
homeBtn.innerText = 'Home';

const menuBtn = document.createElement('li');
menuBtn.innerText = 'Menu';

const contactBtn = document.createElement('li');
contactBtn.innerText = 'Contact Us';

navList.append(homeBtn);
navList.append(menuBtn);
navList.append(contactBtn);
bottomHeader.append(navList);

header.append(topHeader);
header.append(bottomHeader);

contentWrapper.append(header);

console.log('hEADER Done');

// --- MAIN SECTION ---

const main = document.createElement('main');

const mainContainer = document.createElement('div');
mainContainer.classList.add('main-container');

const textContainer = document.createElement('div');
textContainer.classList.add('text-container');

const txtH11 = document.createElement('h1');
const txtH12 = document.createElement('h1');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
const p3 = document.createElement('p');

txtH11.innerText = 'Ramen,';
txtH12.innerText = `the way it's meant to be.`;
p1.innerText = 'Our ingredients are made with fresh lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat et debitis, magni fuga pariatur odio accusamus. Iste ratione animi distinctio!';
p2.innerText = 'Established in 1978, the recipe has dolor sit amet consectetur adipisicing elit. Quisquam excepturi illum ad doloribus totam tenetur eius ducimus quas nobis, distinctio, perspiciatis eum adipisci rerum recusandae culpa repudiandae! Quo sunt dolores, debitis doloribus, tempore laboriosam quasi a natus veritatis culpa ad placeat at odit pariatur in ullam, aliquam fugit eaque numquam!';
p3.innerText = 'Get your fill today.';

const orderBtn = document.createElement('button');
orderBtn.setAttribute('type', 'button');
orderBtn.innerText = 'Order Now';

const ramenImg = document.createElement('img');
ramenImg.setAttribute('src', './ramen-main.jpg');

textContainer.append(txtH11);
textContainer.append(txtH12);
textContainer.append(p1);
textContainer.append(p2);
textContainer.append(p3);
textContainer.append(orderBtn);

mainContainer.append(textContainer);
mainContainer.append(ramenImg);

main.append(mainContainer);

contentWrapper.append(main);

console.log('Main DONE');

// --- FOOTER SECTION ---

const footer = document.createElement('footer');
const footerDiv = document.createElement('div');
footerDiv.innerHTML = 'Copyright 2022. Github: <a href="https://www.github.com/syfq-isml">@syfq-isml.</a> Powered by TheOdinProject.';

footer.append(footerDiv);

contentWrapper.append(footer);

//--- EVENT LISTENERS ---

homeBtn.addEventListener('click', handleHome);
menuBtn.addEventListener('click', handleMenu);
orderBtn.addEventListener('click', handleMenu);
contactBtn.addEventListener('click', handleContact);


function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function handleHome() {

    removeAllChildNodes(contentWrapper);

    contentWrapper.append(header);
    contentWrapper.append(main);
    contentWrapper.append(footer);
}

function handleMenu() {
    
    removeAllChildNodes(contentWrapper);

    if (_menu__WEBPACK_IMPORTED_MODULE_0__.menu.firstTime) _menu__WEBPACK_IMPORTED_MODULE_0__.menu.addMenu(); 

    contentWrapper.append(header);
    contentWrapper.append(_menu__WEBPACK_IMPORTED_MODULE_0__.menu.main);
    contentWrapper.append(footer);

    _menu__WEBPACK_IMPORTED_MODULE_0__.menu.firstTime = false;
}

function handleContact() {

    removeAllChildNodes(contentWrapper);

    if (_contact__WEBPACK_IMPORTED_MODULE_1__.contact.firstTime) _contact__WEBPACK_IMPORTED_MODULE_1__.contact.addContact();

    contentWrapper.append(header);
    contentWrapper.append(_contact__WEBPACK_IMPORTED_MODULE_1__.contact.main);
    contentWrapper.append(footer);

    _contact__WEBPACK_IMPORTED_MODULE_1__.contact.firstTime = false;
}


function sayHello() {
    console.log('hello');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWE7OztBQUdiLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkREOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQ7O0FBRXZEO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFlBQVk7O0FBRVosQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRTJCOzs7Ozs7Ozs7VUM5RTNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhCO0FBQ007OztBQUdwQzs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLFFBQVEsaURBQWMsRUFBRSwrQ0FBWTs7QUFFcEM7QUFDQSwwQkFBMEIsNENBQVM7QUFDbkM7O0FBRUEsSUFBSSxpREFBYztBQUNsQjs7QUFFQTs7QUFFQTs7QUFFQSxRQUFRLHVEQUFpQixFQUFFLHdEQUFrQjs7QUFFN0M7QUFDQSwwQkFBMEIsa0RBQVk7QUFDdEM7O0FBRUEsSUFBSSx1REFBaUI7QUFDckI7OztBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuY29uc3QgY29udGFjdCA9IChmdW5jdGlvbigpe1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IGZpcnN0VGltZSA9IHRydWU7XG5cbiAgICBjb25zdCBleGlzdCA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gYWRkQ29udGFjdCgpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QtbWFpbi1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC10ZXh0LWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICAgICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBiciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJyk7XG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGNvbnN0IHA0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBwNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgICAgICBoMS5pbm5lclRleHQgPSAnQ29udGFjdCBVcyc7XG4gICAgICAgIHAxLmlubmVyVGV4dCA9ICfwn5OeICs2NSA2NzEyIDQ1NjcnO1xuICAgICAgICBwMi5pbm5lclRleHQgPSAn8J+WgiBjb250YWN0QGhlYXJ0eXJhbWVuLmNvbSc7XG4gICAgICAgIGgyLmlubmVyVGV4dCA9ICdPdXIgTG9jYXRpb24nO1xuICAgICAgICBwMy5pbm5lclRleHQgPSAnTWFyaW5hIEJheSBTYW5kcyc7XG4gICAgICAgIHA0LmlubmVyVGV4dCA9ICcxMCBCYXlmcm9udCBBdmVudWUnO1xuICAgICAgICBwNS5pbm5lclRleHQgPSAnU2luZ2Fwb3JlIDAxOTExMCc7XG5cbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmQoaDEpO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZChwMSk7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kKHAyKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmQoYnIpO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZChoMik7XG4gICAgICAgIHRleHRDb250YWluZXIuYXBwZW5kKHAzKTtcbiAgICAgICAgdGV4dENvbnRhaW5lci5hcHBlbmQocDQpO1xuICAgICAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZChwNSk7XG5cbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1pbWctY29udCcpO1xuXG4gICAgICAgIG1haW5Db250YWluZXIuYXBwZW5kKHRleHRDb250YWluZXIpO1xuICAgICAgICBtYWluQ29udGFpbmVyLmFwcGVuZChpbWFnZSk7XG5cbiAgICAgICAgbWFpbi5hcHBlbmQobWFpbkNvbnRhaW5lcik7XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgbWFpbiwgZmlyc3RUaW1lLCBleGlzdCwgYWRkQ29udGFjdH07XG5cblxufSkoKTtcblxuZXhwb3J0IHsgY29udGFjdCB9OyIsImNvbnN0IG1lbnUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuXG4gICAgY29uc3QgZmlyc3RUaW1lID0gdHJ1ZTtcblxuICAgIGNvbnN0IGV4aXN0ID0gZmFsc2U7XG5cbiAgICBjb25zdCBhZGRNZW51ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1jb250YWluZXInKTtcblxuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMS5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTIuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0zLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuXG4gICAgY29uc3QgbWVudVBpYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UGljMS5jbGFzc0xpc3QuYWRkKCdtZW51LXBpYycpO1xuICAgIG1lbnVQaWMxLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vcmFtZW4tb2cuanBnKScpO1xuICAgIGNvbnN0IG1lbnVQaWMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVBpYzIuY2xhc3NMaXN0LmFkZCgnbWVudS1waWMnKTtcbiAgICBtZW51UGljMi5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybCguL3JhbWVuLXNwaWN5LmpwZyknKTtcbiAgICBjb25zdCBtZW51UGljMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQaWMzLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGljJyk7XG4gICAgbWVudVBpYzMuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9yYW1lbi1jaGVlc2UuanBnKScpO1xuXG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHAxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCB0ZXh0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBoMTEuaW5uZXJUZXh0ID0gJ09yaWdpbmFsIFJhbWVuJztcbiAgICBwMS5pbm5lclRleHQgPSBgVGhpcyByYW1lbiBpcyBvZiBhIGNsYXNzaWMgZmxhdm9yOyBhIGNsZWFuIGJyb3RoIHRvcHBlZCB3aXRoIGVnZyBhbmQgbWVhdC4gQSB0YXN0ZSB0aGF0J3MgZmFtaWxpYXIgdG8gZXZlcnlvbmUuYDtcblxuICAgIGgxMi5pbm5lclRleHQgPSAnU3BpY3kgUmFtZW4nO1xuICAgIHAyLmlubmVyVGV4dCA9IGBTcGljZSBsZXZlbCB0aGF0J3MgbWFuYWdlYWJsZSBidXQgc3RpbGwgcGFja3MgYSBwdW5jaCwgdGhpcyByYW1lbiB3aWxsIHRhbnRhbGl6ZSB5b3VyIHRhc3RlIGJ1ZHMgd2l0aCBhbiBvcmllbnRhbCB0d2lzdC5gO1xuXG4gICAgaDEzLmlubmVyVGV4dCA9ICdDaGVlc2UgUmFtZW4nO1xuICAgIHAzLmlubmVyVGV4dCA9IGBGZWVsaW5nIGxhenk/IFdlJ2xsIHBhaXIgdGhhdCB1cCBmb3IgeW91IHdpdGggdGhpcyBzaW1wbGUgeWV0IHNvcGhpc3RpY2F0ZWQgcmFtZW4gY2hvaWNlLiBBIHBsYXRlIHRvIGZlZWwgbGlrZSBob21lLmA7XG5cblxuICAgIHRleHQxLmFwcGVuZChoMTEpO1xuICAgIHRleHQxLmFwcGVuZChwMSk7XG4gICAgbWVudUl0ZW0xLmFwcGVuZChtZW51UGljMSk7XG4gICAgbWVudUl0ZW0xLmFwcGVuZCh0ZXh0MSk7XG4gICAgdGV4dDIuYXBwZW5kKGgxMik7XG4gICAgdGV4dDIuYXBwZW5kKHAyKTtcbiAgICBtZW51SXRlbTIuYXBwZW5kKG1lbnVQaWMyKTtcbiAgICBtZW51SXRlbTIuYXBwZW5kKHRleHQyKTtcbiAgICB0ZXh0My5hcHBlbmQoaDEzKTtcbiAgICB0ZXh0My5hcHBlbmQocDMpO1xuICAgIG1lbnVJdGVtMy5hcHBlbmQobWVudVBpYzMpO1xuICAgIG1lbnVJdGVtMy5hcHBlbmQodGV4dDMpO1xuXG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW0xKTtcbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51SXRlbTIpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtMyk7XG5cbiAgICBtYWluLmFwcGVuZChtZW51Q29udGFpbmVyKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHttYWluLCBmaXJzdFRpbWUsIGV4aXN0LCBhZGRNZW51fTtcblxufSkoKTtcblxuZnVuY3Rpb24gYXBwZW5kTWVudShlbGVtZW50LCBlbGVtKSB7XG4gICAgZWxlbWVudC5hcHBlbmQoZWxlbSk7XG59XG5cbmV4cG9ydCB7IG1lbnUsIGFwcGVuZE1lbnV9O1xuXG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbWVudSB9IGZyb20gJy4vbWVudSc7XG5pbXBvcnQgeyBjb250YWN0IH0gZnJvbSAnLi9jb250YWN0JztcblxuXG5jb25zb2xlLmxvZygnSW5pdGlhbGlzaW5nLi4uJyk7XG5cbmNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy8gLS0tIEhFQURFUiBTRUNUSU9OIC0tLVxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuY29uc3QgdG9wSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50b3BIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRvcCcpO1xuXG5cbmNvbnN0IHRvcEhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRvcEhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xubG9nby5pbm5lckhUTUwgPSAnPHNwYW4+SEVBUlRZPC9zcGFuPiBSQU1FTjwvaDE+JztcblxuY29uc3QgaGVhZGVySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuaGVhZGVySDIuaW5uZXJUZXh0ID0gJyAtIFNvdXAgZm9yIHRoZSBzb3VsIC0gJztcblxudG9wSGVhZGVyV3JhcHBlci5hcHBlbmQobG9nbyk7XG50b3BIZWFkZXJXcmFwcGVyLmFwcGVuZChoZWFkZXJIMik7XG50b3BIZWFkZXIuYXBwZW5kKHRvcEhlYWRlcldyYXBwZXIpO1xuXG5jb25zdCBib3R0b21IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJvdHRvbUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYm90dG9tJyk7XG5cbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmhvbWVCdG4uaW5uZXJUZXh0ID0gJ0hvbWUnO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbm1lbnVCdG4uaW5uZXJUZXh0ID0gJ01lbnUnO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gJ0NvbnRhY3QgVXMnO1xuXG5uYXZMaXN0LmFwcGVuZChob21lQnRuKTtcbm5hdkxpc3QuYXBwZW5kKG1lbnVCdG4pO1xubmF2TGlzdC5hcHBlbmQoY29udGFjdEJ0bik7XG5ib3R0b21IZWFkZXIuYXBwZW5kKG5hdkxpc3QpO1xuXG5oZWFkZXIuYXBwZW5kKHRvcEhlYWRlcik7XG5oZWFkZXIuYXBwZW5kKGJvdHRvbUhlYWRlcik7XG5cbmNvbnRlbnRXcmFwcGVyLmFwcGVuZChoZWFkZXIpO1xuXG5jb25zb2xlLmxvZygnaEVBREVSIERvbmUnKTtcblxuLy8gLS0tIE1BSU4gU0VDVElPTiAtLS1cblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuXG5jb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJyk7XG5cbmNvbnN0IHR4dEgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0eHRIMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG50eHRIMTEuaW5uZXJUZXh0ID0gJ1JhbWVuLCc7XG50eHRIMTIuaW5uZXJUZXh0ID0gYHRoZSB3YXkgaXQncyBtZWFudCB0byBiZS5gO1xucDEuaW5uZXJUZXh0ID0gJ091ciBpbmdyZWRpZW50cyBhcmUgbWFkZSB3aXRoIGZyZXNoIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBsYWNlYXQgZXQgZGViaXRpcywgbWFnbmkgZnVnYSBwYXJpYXR1ciBvZGlvIGFjY3VzYW11cy4gSXN0ZSByYXRpb25lIGFuaW1pIGRpc3RpbmN0aW8hJztcbnAyLmlubmVyVGV4dCA9ICdFc3RhYmxpc2hlZCBpbiAxOTc4LCB0aGUgcmVjaXBlIGhhcyBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWlzcXVhbSBleGNlcHR1cmkgaWxsdW0gYWQgZG9sb3JpYnVzIHRvdGFtIHRlbmV0dXIgZWl1cyBkdWNpbXVzIHF1YXMgbm9iaXMsIGRpc3RpbmN0aW8sIHBlcnNwaWNpYXRpcyBldW0gYWRpcGlzY2kgcmVydW0gcmVjdXNhbmRhZSBjdWxwYSByZXB1ZGlhbmRhZSEgUXVvIHN1bnQgZG9sb3JlcywgZGViaXRpcyBkb2xvcmlidXMsIHRlbXBvcmUgbGFib3Jpb3NhbSBxdWFzaSBhIG5hdHVzIHZlcml0YXRpcyBjdWxwYSBhZCBwbGFjZWF0IGF0IG9kaXQgcGFyaWF0dXIgaW4gdWxsYW0sIGFsaXF1YW0gZnVnaXQgZWFxdWUgbnVtcXVhbSEnO1xucDMuaW5uZXJUZXh0ID0gJ0dldCB5b3VyIGZpbGwgdG9kYXkuJztcblxuY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm9yZGVyQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbm9yZGVyQnRuLmlubmVyVGV4dCA9ICdPcmRlciBOb3cnO1xuXG5jb25zdCByYW1lbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xucmFtZW5JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9yYW1lbi1tYWluLmpwZycpO1xuXG50ZXh0Q29udGFpbmVyLmFwcGVuZCh0eHRIMTEpO1xudGV4dENvbnRhaW5lci5hcHBlbmQodHh0SDEyKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAxKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAyKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAzKTtcbnRleHRDb250YWluZXIuYXBwZW5kKG9yZGVyQnRuKTtcblxubWFpbkNvbnRhaW5lci5hcHBlbmQodGV4dENvbnRhaW5lcik7XG5tYWluQ29udGFpbmVyLmFwcGVuZChyYW1lbkltZyk7XG5cbm1haW4uYXBwZW5kKG1haW5Db250YWluZXIpO1xuXG5jb250ZW50V3JhcHBlci5hcHBlbmQobWFpbik7XG5cbmNvbnNvbGUubG9nKCdNYWluIERPTkUnKTtcblxuLy8gLS0tIEZPT1RFUiBTRUNUSU9OIC0tLVxuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbmNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyRGl2LmlubmVySFRNTCA9ICdDb3B5cmlnaHQgMjAyMi4gR2l0aHViOiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9zeWZxLWlzbWxcIj5Ac3lmcS1pc21sLjwvYT4gUG93ZXJlZCBieSBUaGVPZGluUHJvamVjdC4nO1xuXG5mb290ZXIuYXBwZW5kKGZvb3RlckRpdik7XG5cbmNvbnRlbnRXcmFwcGVyLmFwcGVuZChmb290ZXIpO1xuXG4vLy0tLSBFVkVOVCBMSVNURU5FUlMgLS0tXG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVIb21lKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNZW51KTtcbm9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlTWVudSk7XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ29udGFjdCk7XG5cblxuZnVuY3Rpb24gcmVtb3ZlQWxsQ2hpbGROb2RlcyhwYXJlbnQpIHtcbiAgICB3aGlsZSAocGFyZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcGFyZW50LnJlbW92ZUNoaWxkKHBhcmVudC5maXJzdENoaWxkKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUhvbWUoKSB7XG5cbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnRXcmFwcGVyKTtcblxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZChoZWFkZXIpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZChtYWluKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcbiAgICBcbiAgICByZW1vdmVBbGxDaGlsZE5vZGVzKGNvbnRlbnRXcmFwcGVyKTtcblxuICAgIGlmIChtZW51LmZpcnN0VGltZSkgbWVudS5hZGRNZW51KCk7IFxuXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kKGhlYWRlcik7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kKG1lbnUubWFpbik7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kKGZvb3Rlcik7XG5cbiAgICBtZW51LmZpcnN0VGltZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDb250YWN0KCkge1xuXG4gICAgcmVtb3ZlQWxsQ2hpbGROb2Rlcyhjb250ZW50V3JhcHBlcik7XG5cbiAgICBpZiAoY29udGFjdC5maXJzdFRpbWUpIGNvbnRhY3QuYWRkQ29udGFjdCgpO1xuXG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kKGhlYWRlcik7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kKGNvbnRhY3QubWFpbik7XG4gICAgY29udGVudFdyYXBwZXIuYXBwZW5kKGZvb3Rlcik7XG5cbiAgICBjb250YWN0LmZpcnN0VGltZSA9IGZhbHNlO1xufVxuXG5cbmZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICAgIGNvbnNvbGUubG9nKCdoZWxsbycpO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9