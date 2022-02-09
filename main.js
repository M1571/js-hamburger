let hamburger = document.querySelector('.fas.fa-bars');

let menu = document.querySelector('.hamburger-menu')

// Apro nav
hamburger.addEventListener('click', 
function(){
    menu.classList.add('active')
});

let cross = document.querySelector('.close');

// Chiudo nav
cross.addEventListener('click', 
function(){
    menu.classList.remove('active')
});

