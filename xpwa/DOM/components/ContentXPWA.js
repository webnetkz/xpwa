import { Mobile } from '../Mobile.js';

export class ContentXPWA extends HTMLElement {

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
      display: block;
      background: rgba(0,0,0,0.1);
    `;
  }

  setMobileStyles()
  {
    this.style.cssText = `
    `;
  }
}

customElements.define("content-xpwa", ContentXPWA);
