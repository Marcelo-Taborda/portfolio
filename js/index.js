//ANIMACION DEL H1, CIRCULO//
var animationEnd = false;
const bounceAnimation = () => {
    if (!animationEnd) {
        animationEnd = true;
        h1.classList.add('bounceInAnimation');
        setTimeout(() => {
            h1.classList.remove('bounceInAnimation');
            animationEnd = false;
        }, 1000);
    }
};
const h1 = document.getElementById('h1');
h1.addEventListener('click', bounceAnimation);
h1.addEventListener("mouseenter", bounceAnimation);

//EVITAR QUE EL VH SEA MAYOR A LA PANTALLA DE LOS CELULARES//
const appHeight = () => {
    document.documentElement.style.setProperty('--app-height', `${window.innerHeight}px`);
    console.log(document.documentElement.style.getPropertyValue('--app-height'));
}
appHeight();
window.addEventListener('resize', appHeight);

//HACER QUE EL CHEVRONUP APARESCA Y DESAPARESCA DEPENDIENDO DEL SCROLL//
const chevronUp = document.querySelector('.chevronUp');
const scrollFunction = () => {
    if (document.body.scrollTop > window.innerHeight-1 || document.documentElement.scrollTop > window.innerHeight-1) {
        chevronUp.style.display = "block";
    } else {
        chevronUp.style.display = "none";
    }
}
window.onscroll = scrollFunction;
