/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

homeBtn.addEventListener('click', sayHello);
menuBtn.addEventListener('click', sayHello);
orderBtn.addEventListener('click', sayHello);
contactBtn.addEventListener('click', sayHello);

function sayHello() {
    console.log('hello');
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXJlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZygnSW5pdGlhbGlzaW5nLi4uJyk7XG5cbmNvbnN0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuLy8gLS0tIEhFQURFUiBTRUNUSU9OIC0tLVxuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcblxuY29uc3QgdG9wSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50b3BIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyLXRvcCcpO1xuXG5cbmNvbnN0IHRvcEhlYWRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbnRvcEhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xuXG5jb25zdCBsb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycpO1xubG9nby5pbm5lckhUTUwgPSAnPHNwYW4+SEVBUlRZPC9zcGFuPiBSQU1FTjwvaDE+JztcblxuY29uc3QgaGVhZGVySDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuaGVhZGVySDIuaW5uZXJUZXh0ID0gJyAtIFNvdXAgZm9yIHRoZSBzb3VsIC0gJztcblxudG9wSGVhZGVyV3JhcHBlci5hcHBlbmQobG9nbyk7XG50b3BIZWFkZXJXcmFwcGVyLmFwcGVuZChoZWFkZXJIMik7XG50b3BIZWFkZXIuYXBwZW5kKHRvcEhlYWRlcldyYXBwZXIpO1xuXG5jb25zdCBib3R0b21IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmJvdHRvbUhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXItYm90dG9tJyk7XG5cbmNvbnN0IG5hdkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG5jb25zdCBob21lQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmhvbWVCdG4uaW5uZXJUZXh0ID0gJ0hvbWUnO1xuXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbm1lbnVCdG4uaW5uZXJUZXh0ID0gJ01lbnUnO1xuXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbmNvbnRhY3RCdG4uaW5uZXJUZXh0ID0gJ0NvbnRhY3QgVXMnO1xuXG5uYXZMaXN0LmFwcGVuZChob21lQnRuKTtcbm5hdkxpc3QuYXBwZW5kKG1lbnVCdG4pO1xubmF2TGlzdC5hcHBlbmQoY29udGFjdEJ0bik7XG5ib3R0b21IZWFkZXIuYXBwZW5kKG5hdkxpc3QpO1xuXG5oZWFkZXIuYXBwZW5kKHRvcEhlYWRlcik7XG5oZWFkZXIuYXBwZW5kKGJvdHRvbUhlYWRlcik7XG5cbmNvbnRlbnRXcmFwcGVyLmFwcGVuZChoZWFkZXIpO1xuXG5jb25zb2xlLmxvZygnaEVBREVSIERvbmUnKTtcblxuLy8gLS0tIE1BSU4gU0VDVElPTiAtLS1cblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubWFpbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtYWluLWNvbnRhaW5lcicpO1xuXG5jb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG50ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJyk7XG5cbmNvbnN0IHR4dEgxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0eHRIMTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5jb25zdCBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmNvbnN0IHAzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG50eHRIMTEuaW5uZXJUZXh0ID0gJ1JhbWVuLCc7XG50eHRIMTIuaW5uZXJUZXh0ID0gYHRoZSB3YXkgaXQncyBtZWFudCB0byBiZS5gO1xucDEuaW5uZXJUZXh0ID0gJ091ciBpbmdyZWRpZW50cyBhcmUgbWFkZSB3aXRoIGZyZXNoIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFBsYWNlYXQgZXQgZGViaXRpcywgbWFnbmkgZnVnYSBwYXJpYXR1ciBvZGlvIGFjY3VzYW11cy4gSXN0ZSByYXRpb25lIGFuaW1pIGRpc3RpbmN0aW8hJztcbnAyLmlubmVyVGV4dCA9ICdFc3RhYmxpc2hlZCBpbiAxOTc4LCB0aGUgcmVjaXBlIGhhcyBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBRdWlzcXVhbSBleGNlcHR1cmkgaWxsdW0gYWQgZG9sb3JpYnVzIHRvdGFtIHRlbmV0dXIgZWl1cyBkdWNpbXVzIHF1YXMgbm9iaXMsIGRpc3RpbmN0aW8sIHBlcnNwaWNpYXRpcyBldW0gYWRpcGlzY2kgcmVydW0gcmVjdXNhbmRhZSBjdWxwYSByZXB1ZGlhbmRhZSEgUXVvIHN1bnQgZG9sb3JlcywgZGViaXRpcyBkb2xvcmlidXMsIHRlbXBvcmUgbGFib3Jpb3NhbSBxdWFzaSBhIG5hdHVzIHZlcml0YXRpcyBjdWxwYSBhZCBwbGFjZWF0IGF0IG9kaXQgcGFyaWF0dXIgaW4gdWxsYW0sIGFsaXF1YW0gZnVnaXQgZWFxdWUgbnVtcXVhbSEnO1xucDMuaW5uZXJUZXh0ID0gJ0dldCB5b3VyIGZpbGwgdG9kYXkuJztcblxuY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbm9yZGVyQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbm9yZGVyQnRuLmlubmVyVGV4dCA9ICdPcmRlciBOb3cnO1xuXG5jb25zdCByYW1lbkltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xucmFtZW5JbWcuc2V0QXR0cmlidXRlKCdzcmMnLCAnLi9yYW1lbi1tYWluLmpwZycpO1xuXG50ZXh0Q29udGFpbmVyLmFwcGVuZCh0eHRIMTEpO1xudGV4dENvbnRhaW5lci5hcHBlbmQodHh0SDEyKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAxKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAyKTtcbnRleHRDb250YWluZXIuYXBwZW5kKHAzKTtcbnRleHRDb250YWluZXIuYXBwZW5kKG9yZGVyQnRuKTtcblxubWFpbkNvbnRhaW5lci5hcHBlbmQodGV4dENvbnRhaW5lcik7XG5tYWluQ29udGFpbmVyLmFwcGVuZChyYW1lbkltZyk7XG5cbm1haW4uYXBwZW5kKG1haW5Db250YWluZXIpO1xuXG5jb250ZW50V3JhcHBlci5hcHBlbmQobWFpbik7XG5cbmNvbnNvbGUubG9nKCdNYWluIERPTkUnKTtcblxuLy8gLS0tIEZPT1RFUiBTRUNUSU9OIC0tLVxuXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbmNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZm9vdGVyRGl2LmlubmVySFRNTCA9ICdDb3B5cmlnaHQgMjAyMi4gR2l0aHViOiA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZ2l0aHViLmNvbS9zeWZxLWlzbWxcIj5Ac3lmcS1pc21sLjwvYT4gUG93ZXJlZCBieSBUaGVPZGluUHJvamVjdC4nO1xuXG5mb290ZXIuYXBwZW5kKGZvb3RlckRpdik7XG5cbmNvbnRlbnRXcmFwcGVyLmFwcGVuZChmb290ZXIpO1xuXG4vLy0tLSBFVkVOVCBMSVNURU5FUlMgLS0tXG5cbmhvbWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXlIZWxsbyk7XG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F5SGVsbG8pO1xub3JkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzYXlIZWxsbyk7XG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F5SGVsbG8pO1xuXG5mdW5jdGlvbiBzYXlIZWxsbygpIHtcbiAgICBjb25zb2xlLmxvZygnaGVsbG8nKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==