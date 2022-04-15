import { menu } from './menu';
import { contact } from './contact';


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

    if (menu.firstTime) menu.addMenu(); 

    contentWrapper.append(header);
    contentWrapper.append(menu.main);
    contentWrapper.append(footer);

    menu.firstTime = false;
}

function handleContact() {

    removeAllChildNodes(contentWrapper);

    if (contact.firstTime) contact.addContact();

    contentWrapper.append(header);
    contentWrapper.append(contact.main);
    contentWrapper.append(footer);

    contact.firstTime = false;
}


function sayHello() {
    console.log('hello');
}
