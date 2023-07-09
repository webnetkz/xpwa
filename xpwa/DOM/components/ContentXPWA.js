import { Mobile } from '../Mobile.js';

export class ContentXPWA extends HTMLElement
{
  constructor()
  {
    super();
    
    this.setStyles();

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }
  }

  setStyles()
  {
    this.style.cssText += `
      display: block;
      position: relative;
      left: 0.5vw;
      top: 1vh;
      min-height: 90vh;
      min-width: 98vw;
      background: var(--gray-gradient);
      padding: var(--padding);
      border-radius: var(--radius);
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
    `;
  }
}

customElements.define("content-xpwa", ContentXPWA);