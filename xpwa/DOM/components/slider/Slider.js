import { Mobile } from '../../Mobile.js';
import { SlideXPWA } from './Slide.js';
import { NextSlideXPWA } from './NextSlide.js';
import { BackSlideXPWA } from './BackSlide.js';
import { DotXPWA } from '../Dot.js';
import { DotsContainerXPWA } from '../DotsContainer.js';



export class SliderXPWA extends HTMLElement
{
  constructor()
  {
    super();
    
    this.sliderIndex = 0;

    this.prepend(document.createElement('back-slide-xpwa'));
    this.appendChild(document.createElement('dots-container-xpwa'));
    this.appendChild(document.createElement('next-slide-xpwa'));

    const images = this.getAllImages();
    
    images.forEach((image) => {
      console.log(image.src);
    });

    this.createDots(images);
  }

  getAllImages()
  {
    return this.querySelectorAll('img');
  }

  createDots(images)
  {
    const dotsContainer = this.querySelector('dots-container-xpwa');

    images.forEach((_, i) => {
      const dot = document.createElement('dot-xpwa');

      if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
        this.sliderIndex = i;
            this.updateSlider();
        });
        dotsContainer.appendChild(dot);
    });
  }

  updateSlider() {
    const dots = this.querySelectorAll('dot-xpwa');
    //this.style.transform = `translateX(-${this.sliderIndex * 100}vw)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[this.sliderIndex].classList.add('active');
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

  static get observedAttributes()
  {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
  }
}

customElements.define("slider-xpwa", SliderXPWA);