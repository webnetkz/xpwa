import { Mobile } from '../Mobile.js';

export class Card3DXPWA extends HTMLElement {

  constructor() {
    super();

    this.addEventListener('mousemove', this.rotate);  
    this.addEventListener('mouseout', this.stopRotate);      
    this.setStyles();

    if(Mobile.isMobile())
    {
      window.addEventListener("deviceorientation", function(event) {

        let container = document.querySelector('.tmp');
        let beta = (Math.round(event.beta) / 180) * 6;
        let gamma = (Math.round(event.gamma) / 90) * 3;

        const maxRotation = 30;
        beta *= maxRotation;
        gamma *= maxRotation;

        container.style.transform = 'rotateX(' + -beta + 'deg) rotateY(' + gamma + 'deg)';
      }, true);
    }
  }

  rotate(event)
  {
    let container = this.querySelector('div');
    const halfHeight = container.offsetHeight / 2;
    const halfWidth = container.offsetWidth / 2;

    container.style.transform = 'rotateX(' + -
    ((event.offsetY - halfHeight) / 2 ) + 'deg) rotateY(' + 
    ((event.offsetX - halfWidth) / 2 ) + 'deg)';    
  }

  stopRotate(event)
  {
    let container = this.querySelector('div');
    container.style.transform = 'rotate(0)';
  }

  setStyles()
  {
    this.style.cssText = `
      perspective: 1000px;
      transform-style: preserve-3d;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 200px;
    `;
  }
}

customElements.define("card-3d-XPWA", Card3DXPWA);
