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
    this.timer = 1;

    this.setAttribute('index', this.sliderIndex);
    
    this.prepend(document.createElement('back-slide-xpwa'));
    this.appendChild(document.createElement('dots-container-xpwa'));
    this.appendChild(document.createElement('next-slide-xpwa'));
    
    const images = this.getAllImages();
    
    this.setImage(images[0]);
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
            this.updateDots();
        });
        dotsContainer.appendChild(dot);
      });
  }

  updateDots()
  {
    this.isUpdating = true;
    const dots = this.querySelectorAll('dot-xpwa');

    dots.forEach(dot => dot.classList.remove('active'));
    dots[this.sliderIndex].classList.add('active');
    this.setAttribute('index', this.sliderIndex);
    
    this.setImage(this.getAllImages()[this.sliderIndex]);
    this.isUpdating = false;
  }

  autoUpdateSlider()
  {
    setInterval(() => {
      this.querySelector('next-slide-xpwa').click();
    }, this.timer * 1000);
  }

  setImage(img)
  {
    this.style.background = 'url("'+img.src+'")';
  }

  static get observedAttributes() {
    return ['index', 'timer'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if(name === 'index' && !this.isUpdating)
    {
      this.sliderIndex = parseInt(newValue, 10);
      this.updateDots();
    }

    if(name === 'timer')
    {
      this.timer = newValue;
      this.autoUpdateSlider();
    }
  }
}

customElements.define("slider-xpwa", SliderXPWA);