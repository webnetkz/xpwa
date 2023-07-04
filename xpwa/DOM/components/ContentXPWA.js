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
    this.style.cssText += `
      display: block;
      min-height: 90vh;
      min-width: 98vw;
      background: var(--gray-gradient);
      margin: var(--margin);
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
