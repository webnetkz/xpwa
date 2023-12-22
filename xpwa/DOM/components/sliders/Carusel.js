import { SlideXPWA } from './Slide.js';
import { NextSlideXPWA } from './NextSlide.js';
import { BackSlideXPWA } from './BackSlide.js';
import { DotXPWA } from './Dot.js';
import { DotsContainerXPWA } from './DotsContainer.js';


export class CaruselXPWA extends HTMLElement
{
  constructor()
  {
    super();
    
    this.sliderIndex = 0;
    this.timer = 1;

    this.setAttribute('index', this.sliderIndex);
    this.createArrows();

    if(!window.MOBILE.isMobile())
    {
    }

    this.swipes();

    const images = this.getAllImages();
    
    this.setImage(images[0]);
    this.createDots(images);
  }

  swipes()
  {
    let next = this.querySelector("next-slide-x");
    let previous = this.querySelector("back-slide-x");

    let startX;
    let endX;

    function handleTouchStart(e) {
      startX = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
      endX = e.changedTouches[0].clientX;
      handleSwipe();
    }

    function handleSwipe() {
      if (startX - endX > 100) {
        next.click();
      } else if (startX - endX < -100) {
        previous.click();
      }
    }

    this.addEventListener('touchstart', handleTouchStart, false);
    this.addEventListener('touchend', handleTouchEnd, false);
  }

  getAllImages()
  {
    return this.querySelectorAll('img');
  }

  createArrows()
  {
    this.prepend(document.createElement('back-slide-x'));
    this.appendChild(document.createElement('dots-container-x'));
    this.appendChild(document.createElement('next-slide-x'));
  }

  createDots(images)
  {
    const dotsContainer = this.querySelector('dots-container-x');

    images.forEach((_, i) => {
      const dot = document.createElement('dot-x');

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
    const dots = this.querySelectorAll('dot-x');

    dots.forEach(dot => dot.classList.remove('active'));
    dots[this.sliderIndex].classList.add('active');
    this.setAttribute('index', this.sliderIndex);
    
    this.setImage(this.getAllImages()[this.sliderIndex]);
    this.isUpdating = false;
  }

  autoUpdateSlider()
  {
    setInterval(() => {
      this.querySelector('next-slide-x').click();
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

customElements.define("carusel-x", CaruselXPWA);