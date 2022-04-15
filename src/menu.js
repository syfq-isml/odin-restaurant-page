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

export { menu, appendMenu};


