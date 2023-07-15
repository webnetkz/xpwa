export class NextSlideXPWA extends HTMLElement
{
  constructor()
  {
    super();
  }

  handlerNextSlide()
  {
    let slider = this.parentNode;
    let nowSlide = Number(slider.getAttribute('now-slide'));
    let images = slider.querySelectorAll('img');
    let counter = Number(slider.getAttribute('counter'));

    if(nowSlide >= counter)
    {
      nowSlide = 0;
    } 

    slider.classList.add('showElement');
    setTimeout(() => {
      slider.classList.remove('showElement');
    }, 300);
    slider.setAttribute('now-slide', nowSlide + 1);
    slider.style.background = `url('${images[nowSlide].src}')`;
  }
}

customElements.define("next-slide-xpwa", NextSlideXPWA);
