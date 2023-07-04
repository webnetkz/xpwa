import { Mobile } from '../Mobile.js';

export class FooterXPWA extends HTMLElement
{
  constructor()
  {
    super();
    const shadow = this.attachShadow({mode: 'closed'});
    
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
      background: var(--gray-gradient);
      min-width: 98vw;
      min-height: 100px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
    `;
  }
}

customElements.define("footer-xpwa", FooterXPWA);
