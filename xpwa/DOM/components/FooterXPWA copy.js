import { Mobile } from '../Mobile.js';

export class FooterXPWA extends HTMLElement {

  constructor() {
    super();
    
    this.setStyles();

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }
  }

  setStyles()
  {
    this.style.cssText = `

    `;
  }

  setMobileStyles()
  {
    this.style.cssText = `
    `;
  }
}

customElements.define("footer-xpwa", FooterXPWA);
