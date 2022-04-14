/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

    return {main, addMenu};

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
orderBtn.addEventListener('click', sayHello);
contactBtn.addEventListener('click', sayHello);

function handleHome() {
    footer.remove();

    if (_menu__WEBPACK_IMPORTED_MODULE_0__.menu.main) { _menu__WEBPACK_IMPORTED_MODULE_0__.menu.main.remove(); };

    contentWrapper.append(main);
    contentWrapper.append(footer);
}

function handleMenu() {
    main.remove();
    footer.remove();
    _menu__WEBPACK_IMPORTED_MODULE_0__.menu.addMenu();
    contentWrapper.append(_menu__WEBPACK_IMPORTED_MODULE_0__.menu.main);
    contentWrapper.append(footer);
}


function sayHello() {
    console.log('hello');
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxZQUFZOztBQUVaLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUUyQjs7Ozs7Ozs7O1VDMUUzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjhCOzs7QUFHOUI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsUUFBUSw0Q0FBUyxJQUFJLG1EQUFnQjs7QUFFckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVk7QUFDaEIsMEJBQTBCLDRDQUFTO0FBQ25DO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtZW51ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIGNvbnN0IGFkZE1lbnUgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpO1xuXG4gICAgY29uc3QgbWVudUl0ZW0xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudUl0ZW0xLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVJdGVtMi5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBjb25zdCBtZW51SXRlbTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51SXRlbTMuY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG5cbiAgICBjb25zdCBtZW51UGljMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnVQaWMxLmNsYXNzTGlzdC5hZGQoJ21lbnUtcGljJyk7XG4gICAgbWVudVBpYzEuc2V0QXR0cmlidXRlKCdzdHlsZScsICdiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi9yYW1lbi1vZy5qcGcpJyk7XG4gICAgY29uc3QgbWVudVBpYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51UGljMi5jbGFzc0xpc3QuYWRkKCdtZW51LXBpYycpO1xuICAgIG1lbnVQaWMyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vcmFtZW4tc3BpY3kuanBnKScpO1xuICAgIGNvbnN0IG1lbnVQaWMzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudVBpYzMuY2xhc3NMaXN0LmFkZCgnbWVudS1waWMnKTtcbiAgICBtZW51UGljMy5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2JhY2tncm91bmQtaW1hZ2U6IHVybCguL3JhbWVuLWNoZWVzZS5qcGcpJyk7XG5cbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHAyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaDEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBwMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGgxMS5pbm5lclRleHQgPSAnT3JpZ2luYWwgUmFtZW4nO1xuICAgIHAxLmlubmVyVGV4dCA9IGBUaGlzIHJhbWVuIGlzIG9mIGEgY2xhc3NpYyBmbGF2b3I7IGEgY2xlYW4gYnJvdGggdG9wcGVkIHdpdGggZWdnIGFuZCBtZWF0LiBBIHRhc3RlIHRoYXQncyBmYW1pbGlhciB0byBldmVyeW9uZS5gO1xuXG4gICAgaDEyLmlubmVyVGV4dCA9ICdTcGljeSBSYW1lbic7XG4gICAgcDIuaW5uZXJUZXh0ID0gYFNwaWNlIGxldmVsIHRoYXQncyBtYW5hZ2VhYmxlIGJ1dCBzdGlsbCBwYWNrcyBhIHB1bmNoLCB0aGlzIHJhbWVuIHdpbGwgdGFudGFsaXplIHlvdXIgdGFzdGUgYnVkcyB3aXRoIGFuIG9yaWVudGFsIHR3aXN0LmA7XG5cbiAgICBoMTMuaW5uZXJUZXh0ID0gJ0NoZWVzZSBSYW1lbic7XG4gICAgcDMuaW5uZXJUZXh0ID0gYEZlZWxpbmcgbGF6eT8gV2UnbGwgcGFpciB0aGF0IHVwIGZvciB5b3Ugd2l0aCB0aGlzIHNpbXBsZSB5ZXQgc29waGlzdGljYXRlZCByYW1lbiBjaG9pY2UuIEEgcGxhdGUgdG8gZmVlbCBsaWtlIGhvbWUuYDtcblxuXG4gICAgdGV4dDEuYXBwZW5kKGgxMSk7XG4gICAgdGV4dDEuYXBwZW5kKHAxKTtcbiAgICBtZW51SXRlbTEuYXBwZW5kKG1lbnVQaWMxKTtcbiAgICBtZW51SXRlbTEuYXBwZW5kKHRleHQxKTtcbiAgICB0ZXh0Mi5hcHBlbmQoaDEyKTtcbiAgICB0ZXh0Mi5hcHBlbmQocDIpO1xuICAgIG1lbnVJdGVtMi5hcHBlbmQobWVudVBpYzIpO1xuICAgIG1lbnVJdGVtMi5hcHBlbmQodGV4dDIpO1xuICAgIHRleHQzLmFwcGVuZChoMTMpO1xuICAgIHRleHQzLmFwcGVuZChwMyk7XG4gICAgbWVudUl0ZW0zLmFwcGVuZChtZW51UGljMyk7XG4gICAgbWVudUl0ZW0zLmFwcGVuZCh0ZXh0Myk7XG5cbiAgICBtZW51Q29udGFpbmVyLmFwcGVuZChtZW51SXRlbTEpO1xuICAgIG1lbnVDb250YWluZXIuYXBwZW5kKG1lbnVJdGVtMik7XG4gICAgbWVudUNvbnRhaW5lci5hcHBlbmQobWVudUl0ZW0zKTtcblxuICAgIG1haW4uYXBwZW5kKG1lbnVDb250YWluZXIpO1xuICAgIH07XG5cbiAgICByZXR1cm4ge21haW4sIGFkZE1lbnV9O1xuXG59KSgpO1xuXG5mdW5jdGlvbiBhcHBlbmRNZW51KGVsZW1lbnQsIGVsZW0pIHtcbiAgICBlbGVtZW50LmFwcGVuZChlbGVtKTtcbn1cblxuZXhwb3J0IHsgbWVudSwgYXBwZW5kTWVudX07XG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51JztcblxuXG5jb25zb2xlLmxvZygnSW5pdGlhbGlzaW5nLi4uJyk7XG5cbmNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy8gLS0tIEhFQURFUiBTRUNUSU9OIC0tLVxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuY29uc3QgdG9wSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50b3BIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRvcCcpO1xuXG5cbmNvbnN0IHRvcEhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRvcEhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xubG9nby5pbm5lckhUTUwgPSAnPHNwYW4+SEVBUlRZPC9zcGFuPiBSQU1FTjwvaDE+JztcblxuY29uc3QgaGVhZGVySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuaGVhZGVySDIuaW5uZXJUZXh0ID0gJyAtIFNvdXAgZm9yIHRoZSBzb3VsIC0gJztcblxudG9wSGVhZGVyV3JhcHBlci5hcHBlbmQobG9nbyk7XG50b3BIZWFkZXJXcmFwcGVyLmFwcGVuZChoZWFkZXJIMik7XG50b3BIZWFkZXIuYXBwZW5kKHRvcEhlYWRlcldyYXBwZXIpO1xuXG5jb25zdCBib3R0b21IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJvdHRvbUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYm90dG9tJyk7XG5cbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmhvbWVCdG4uaW5uZXJUZXh0ID0gJ0hvbWUnO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbm1lbnVCdG4uaW5uZXJUZXh0ID0gJ01lbnUnO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gJ0NvbnRhY3QgVXMnO1xuXG5uYXZMaXN0LmFwcGVuZChob21lQnRuKTtcbm5hdkxpc3QuYXBwZW5kKG1lbnVCdG4pO1xubmF2TGlzdC5hcHBlbmQoY29udGFjdEJ0bik7XG5ib3R0b21IZWFkZXIuYXBwZW5kKG5hdkxpc3QpO1xuXG5oZWFkZXIuYXBwZW5kKHRvcEhlYWRlcik7XG5oZWFkZXIuYXBwZW5kKGJvdHRvbUhlYWRlcik7XG5cbmNvbnRlbnRXcmFwcGVyLmFwcGVuZChoZWFkZXIpO1xuXG5jb25zb2xlLmxvZygnaEVBREVSIERvbmUnKTtcblxuLy8gLS0tIE1BSU4gU0VDVElPTiAtLS1cblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuXG5jb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJyk7XG5cbmNvbnN0IHR4dEgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0eHRIMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG50eHRIMTEuaW5uZXJUZXh0ID0gJ1JhbWVuLCc7XG50eHRIMTIuaW5uZXJUZXh0ID0gYHRoZSB3YXkgaXQncyBtZWFudCB0byBiZS5gO1xucDEuaW5uZXJUZXh0ID0gJ091ciBpbmdyZWRpZW50cyBhcmUgbWFkZSB3aXRoIGZyZXNoIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBsYWNlYXQgZXQgZGViaXRpcywgbWFnbmkgZnVnYSBwYXJpYXR1ciBvZGlvIGFjY3VzYW11cy4gSXN0ZSByYXRpb25lIGFuaW1pIGRpc3RpbmN0aW8hJztcbnAyLmlubmVyVGV4dCA9ICdFc3RhYmxpc2hlZCBpbiAxOTc4LCB0aGUgcmVjaXBlIGhhcyBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWlzcXVhbSBleGNlcHR1cmkgaWxsdW0gYWQgZG9sb3JpYnVzIHRvdGFtIHRlbmV0dXIgZWl1cyBkdWNpbXVzIHF1YXMgbm9iaXMsIGRpc3RpbmN0aW8sIHBlcnNwaWNpYXRpcyBldW0gYWRpcGlzY2kgcmVydW0gcmVjdXNhbmRhZSBjdWxwYSByZXB1ZGlhbmRhZSEgUXVvIHN1bnQgZG9sb3JlcywgZGViaXRpcyBkb2xvcmlidXMsIHRlbXBvcmUgbGFib3Jpb3NhbSBxdWFzaSBhIG5hdHVzIHZlcml0YXRpcyBjdWxwYSBhZCBwbGFjZWF0IGF0IG9kaXQgcGFyaWF0dXIgaW4gdWxsYW0sIGFsaXF1YW0gZnVnaXQgZWFxdWUgbnVtcXVhbSEnO1xucDMuaW5uZXJUZXh0ID0gJ0dldCB5b3VyIGZpbGwgdG9kYXkuJztcblxuY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm9yZGVyQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbm9yZGVyQnRuLmlubmVyVGV4dCA9ICdPcmRlciBOb3cnO1xuXG5jb25zdCByYW1lbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xucmFtZW5JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9yYW1lbi1tYWluLmpwZycpO1xuXG50ZXh0Q29udGFpbmVyLmFwcGVuZCh0eHRIMTEpO1xudGV4dENvbnRhaW5lci5hcHBlbmQodHh0SDEyKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAxKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAyKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAzKTtcbnRleHRDb250YWluZXIuYXBwZW5kKG9yZGVyQnRuKTtcblxubWFpbkNvbnRhaW5lci5hcHBlbmQodGV4dENvbnRhaW5lcik7XG5tYWluQ29udGFpbmVyLmFwcGVuZChyYW1lbkltZyk7XG5cbm1haW4uYXBwZW5kKG1haW5Db250YWluZXIpO1xuXG5jb250ZW50V3JhcHBlci5hcHBlbmQobWFpbik7XG5cbmNvbnNvbGUubG9nKCdNYWluIERPTkUnKTtcblxuLy8gLS0tIEZPT1RFUiBTRUNUSU9OIC0tLVxuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbmNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyRGl2LmlubmVySFRNTCA9ICdDb3B5cmlnaHQgMjAyMi4gR2l0aHViOiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9zeWZxLWlzbWxcIj5Ac3lmcS1pc21sLjwvYT4gUG93ZXJlZCBieSBUaGVPZGluUHJvamVjdC4nO1xuXG5mb290ZXIuYXBwZW5kKGZvb3RlckRpdik7XG5cbmNvbnRlbnRXcmFwcGVyLmFwcGVuZChmb290ZXIpO1xuXG4vLy0tLSBFVkVOVCBMSVNURU5FUlMgLS0tXG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVIb21lKTtcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVNZW51KTtcbm9yZGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F5SGVsbG8pO1xuY29udGFjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNheUhlbGxvKTtcblxuZnVuY3Rpb24gaGFuZGxlSG9tZSgpIHtcbiAgICBmb290ZXIucmVtb3ZlKCk7XG5cbiAgICBpZiAobWVudS5tYWluKSB7IG1lbnUubWFpbi5yZW1vdmUoKTsgfTtcblxuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZChtYWluKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoZm9vdGVyKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlTWVudSgpIHtcbiAgICBtYWluLnJlbW92ZSgpO1xuICAgIGZvb3Rlci5yZW1vdmUoKTtcbiAgICBtZW51LmFkZE1lbnUoKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmQobWVudS5tYWluKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmQoZm9vdGVyKTtcbn1cblxuXG5mdW5jdGlvbiBzYXlIZWxsbygpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==