export class BackSlideXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.addEventListener('click', this.handlerBackSlide);
  }

  handlerBackSlide()
  {
    
    let slider = this.parentNode;
    let images = slider.getAllImages();

    if (slider.sliderIndex == 0) {
        slider.setAttribute('index', (images.length - 1));
    } else { 
      slider.sliderIndex--;
      slider.setAttribute('index', slider.sliderIndex);
     }
  }
}

customElements.define("back-slide-xpwa", BackSlideXPWA);
