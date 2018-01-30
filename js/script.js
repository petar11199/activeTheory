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
    }, 600);
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

// Loader

var loader = document.querySelector('.loader');
var number = document.querySelector('.number');

setTimeout(() => {
    number.classList.add('number-opacity');
}, 1000);

setTimeout(() => {
    loader.classList.add('loader-opacity');
}, 1500);

setTimeout(() => {
    loader.style.display = 'none';
}, 4000);


// Opacity ako ne pomeri mis

var timeout;
var homeContent = document.querySelector('.home-content');

setTimeout(() => {
document.onmousemove = function(){
    clearTimeout(timeout);
    homeContent.classList.remove('home-content-opacity'); 
    
    timeout = setTimeout(function(){
        homeContent.classList.add('home-content-opacity'); 
        }, 1500);
    }         
}, 7000);

