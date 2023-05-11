export function parallaxScroll(classElem) {
    window.addEventListener('scroll', function() {
        document.querySelector(classElem).style.top = (-pageYOffset / 7) + 'px';
    });
}