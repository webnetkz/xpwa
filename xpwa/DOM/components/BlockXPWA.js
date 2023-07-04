import { Mobile } from '../Mobile.js';

export class BlockXPWA extends HTMLElement {

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
      background: var(--gray-gradient);
      width: 98vw;
      min-height: 100px;
      background: var(--white);
      padding: 10px var(--padding);
      margin: var(--margin);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
    `;
  }
}

customElements.define("block-xpwa", BlockXPWA);
