import { Mobile } from '../../Mobile.js';
import { NextSlideXPWA } from './NextSlide.js';
import { BackSlideXPWA } from './BackSlide.js';
import { DotXPWA } from '../Dot.js';


export class SliderXPWA extends HTMLElement
{
  constructor()
  {
    super();
    
    this.sliderIndex = 0;

    this.prepend(document.createElement('back-slide-xpwa'));
    this.appendChild(document.createElement('next-slide-xpwa'));

  }

  getAllImages()
  {
    return this.querySelectorAll('img');
  }

  createDots(items)
  {
    items.forEach((_, i) => {
      const dot = document.createElement('dot-slide-xpwa');

      if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
        sliderIndex = i;
            this.updateSlider();
        });
        //sliderDotsContainer.appendChild(dot);
    });
  }

  updateSlider() {
    this.style.transform = `translateX(-${sliderIndex * 100}vw)`;
    //sliderDots.forEach(dot => dot.classList.remove('active'));
    //sliderDots[sliderIndex].classList.add('active');
  }


  
  

      // backSlide.addEventListener('click', () => {
      //   sliderIndex--;
      //   if (sliderIndex < 0) sliderIndex = sliderItems.length - 1;
      //   updateSlider();
      // });
    
      // nextSlide.addEventListener('click', () => {
      //   sliderIndex++;
      //   if (sliderIndex >= sliderItems.length) sliderIndex = 0;
      //   updateSlider();
      // });
  
      // setInterval(() => {
      //   nextSlide.click();
      // }, interval);



  setImage(img)
  {
    this.style.background = 'url("'+img.src+'")';
  }

  connectedCallback() {
    console.log('connectedCallback called');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback called');
  }

  adoptedCallback() {
    console.log('adoptedCallback called');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log('attributeChangedCallback called', name, oldValue, newValue);
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