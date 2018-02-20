// Hover za contact menu

var contact = document.querySelector('.contact');
var contactMenu = document.querySelector('.contact-menu');
var items = document.querySelectorAll('.contact-desc span');

contact.addEventListener('mouseenter', () => {
    contactMenu.classList.remove('anim-reverse');
    contactMenu.classList.remove('hidden');
    contactMenu.classList.remove('visuallyhidden'); 

    for ( var i=0; i < items.length; i++ ) {
        var toggleItemMove = getToggleItemMove(i);
        setTimeout( toggleItemMove, i * 50 );
      }
    
    function getToggleItemMove(i) {
      var item = items[i];
      return function() {
        item.classList.toggle('is-moved');
      }
    }
    

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


// Klik na dugme View Work

var btn = document.querySelector('.btn');
var content = document.querySelector('.content');
var myVideo = document.getElementById('myVideo');
var home = document.querySelector('.home');
var work = document.querySelector('.work');

btn.addEventListener('click', () => {
    homeContent.classList.add('visuallyhidden');
    content.classList.add('visuallyhidden');
    setTimeout(() => {
        homeContent.classList.add('hidden');
        content.classList.add('hidden');
        myVideo.classList.add('visuallyhidden');
    }, 2000);
});
