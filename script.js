/*=============================toggle icon navbar=============================*/ 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bxs-x-square')
    navbar.classList.toggle('active')

};
/*=============================scroll section active link=============================*/ 
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*=============================sticky navbar=============================*/ 
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);

    /*=============================remove toggle icon and navbar when click navbar link=============================*/ 
    menuIcon.classList.remove('bxs-x-square')
    navbar.classList.remove('active')

};
/*=============================scroll reveal=============================*/ 
ScrollReveal({
    // reset: true,
    distance: '80px',
    durATION: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading',{ origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, .portforio-box , .contact form',{ origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img',{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content',{ origin: 'right' });