import { Mobile } from '../Mobile.js';

export class NavXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.innerHTML += `<button-xpwa close="close">Close</button-xpwa>`;
    const button = this.querySelector('button-xpwa[close="close"]');

    this.setButtonStyle(button);
    button.addEventListener('click',() => {

      if(Mobile.isMobile())
      {
        this.style.cssText = `
          left: -88vw;
          background: var(--main-theme);`;
      }
      else
      {
        this.style.cssText = `
          left: -19.5vw;
          background: var(--main-theme);`;
      }      
    });

    this.openNav();
  }

  setButtonStyle(button)
  {
    button.style.cssText = `
      position: absolute;
      bottom: 10px;
      left: 2.1vw;
    `;
  }
  
  openNav()
  {
    this.addEventListener('mousemove', () => {
      this.lessContent();
      this.style.cssText = `
      transition-duration: 400ms;
      left: 0vw;
      background: var(--bg);`;
    });
  }

  lessContent()
  {
    const content = document.querySelector('content-xpwa');
    
    if(content && this.style.left == '-19.5vw')
    {
      content.style.left = '10vw';
      content.style.width = '78vw';
    }
    else
    {
      content.style.left = '0.5vw';
      content.style.width = '98vw';
    }
  }
}

customElements.define("nav-xpwa", NavXPWA);
