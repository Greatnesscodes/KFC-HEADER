let bar = document.querySelector('.menubar')
let close = document.querySelector('.close')
let mobileNav = document.querySelector('.mobile-view')
bar.addEventListener('click', ()=>{
    mobileNav.style.display = 'block';
})
close.addEventListener('click', ()=>{
    mobileNav.style.display = 'none';
})
// openNav.addEventListener('click', ()=>{
//     nav.forEach(nav_el => nav_el.classList.add('visible'))
// })

// closeNav.addEventListener('click', ()=>{
//     nav.forEach(nav_el => nav_el.classList.remove('visible'))
// })


//carousel section
let slideIndex = 1;
showSlides(slideIndex)
//next/prev control
function addSlides(n) {
    showSlides(slideIndex += n)
}
function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.slides')
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slides[slideIndex - 1].style.display = "block"

}