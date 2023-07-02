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

    `;
  }

  setMobileStyles()
  {
    this.style.cssText = `
    `;
  }
}

customElements.define("content-xpwa", ContentXPWA);
