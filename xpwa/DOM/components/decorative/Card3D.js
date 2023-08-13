import { Mobile } from '../../Mobile.js';

export class Card3DXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.addEventListener('mousemove', this.rotate);  
    this.addEventListener('mouseout', this.stopRotate);      

    if(Mobile.isMobile())
    {
      window.addEventListener("deviceorientation", function(event)
      {

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
    const halfHeight = this.offsetHeight / 2;
    const halfWidth = this.offsetWidth / 2;

    this.style.transform = 'rotateX(' + -
    ((event.offsetY - halfHeight) / 5 ) + 'deg) rotateY(' + 
    ((event.offsetX - halfWidth) / 5 ) + 'deg)';    
  }

  stopRotate(event)
  {
    this.style.transform = 'rotate(0)';
  }
}

customElements.define("card-3d-x", Card3DXPWA);

