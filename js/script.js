// Hover za contact menu

var contact = document.querySelector('.contact');
var contactMenu = document.querySelector('.contact-menu');

contact.addEventListener('mouseenter', () => {
    contactMenu.classList.remove('anim-reverse');
    contactMenu.classList.remove('hidden');
    contactMenu.classList.remove('visuallyhidden'); 
});

contactMenu.addEventListener('mouseleave', () => {
    contactMenu.classList.add('anim-reverse');
    setTimeout(() => {
        contactMenu.classList.add('visuallyhidden');
        contactMenu.classList.add('hidden'); 
    }, 330);
});


// Hover za donju liniju ispod dugmeta

var btnOuter = document.querySelector('.btn-outer');
var line = document.querySelector('.bottom-line');

btnOuter.addEventListener('mouseenter', () => {
    line.className = 'bottom-line hoveredLine';
});

btnOuter.addEventListener('mouseleave', () => {
    line.className = 'bottom-line';
})
