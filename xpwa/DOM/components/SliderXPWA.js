export class SliderXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.innerHTML += `
    <div class="backSlide"></div>
    <div class="nextSlide"></div>`;


    this.classList.add('block');
    this.timer = 5;
    this.nowSlide = 0;
    
    this.images = this.querySelectorAll('img');
    this.setAttribute('counter', this.images.length);
    this.setAttribute('now-slide', "1");
    this.setAttribute('timer', this.timer);
    this.setImage(this.images[this.nowSlide]);
    this.querySelector('.backSlide').addEventListener('click', this.handlerBackSlide);
    this.querySelector('.nextSlide').addEventListener('click', this.handlerNextSlide);

    this.autoSlide();
  }

  autoSlide()
  {
    setInterval(() => {
      this.querySelector('.nextSlide').click();
    }, this.timer * 1000);
  }

  setImage(img)
  {
    this.style.background = 'url("'+img.src+'")';
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

  static get observedAttributes()
  {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
  }
}

customElements.define("slider-xpwa", SliderXPWA);