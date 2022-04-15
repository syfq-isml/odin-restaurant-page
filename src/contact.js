
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

export { contact };