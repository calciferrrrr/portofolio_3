let menuIcon = document.querySelector('.menu-icon ion-icon');
let navbar = document.querySelector('.navbar');

let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    if(top >= offset && top < offset + height){
        navLinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav ul li a[href*=' + id + ']').classList.add(active)
        })
    }
}


menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
});            