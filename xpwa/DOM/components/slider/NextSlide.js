export class NextSlideXPWA extends HTMLElement
{
    constructor()
    {
        super();

        this.addEventListener('click', this.handlerNextSlide);
    }

    handlerNextSlide() {
        let slider = this.parentNode;
        let images = slider.getAllImages();

        if (slider.sliderIndex < images.length - 1) {
            slider.sliderIndex++;
            slider.setAttribute('index', slider.sliderIndex);
        } else { slider.setAttribute('index', 0); }
    }
}

customElements.define("next-slide-xpwa", NextSlideXPWA);
