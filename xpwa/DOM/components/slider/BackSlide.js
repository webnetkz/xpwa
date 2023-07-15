export class BackSlideXPWA extends HTMLElement
{
  constructor()
  {
    super();
  }

  handlerBackSlide()
  {
    
    let slider = this.parentNode;
    let nowSlide = Number(slider.getAttribute('now-slide'));
    let images = slider.querySelectorAll('img');
    let counter = Number(slider.getAttribute('counter'));

    if(counter == 0)
    {
      nowSlide = images.length;
    } 

    slider.classList.add('showElement');
    setTimeout(() => {
      slider.classList.remove('showElement');
    }, 300);
    slider.setAttribute('now-slide', nowSlide - 1);
    slider.style.background = `url('${images[nowSlide].src}')`;
  }
}

customElements.define("back-slide-xpwa", BackSlideXPWA);
