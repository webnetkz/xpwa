import { Mobile } from '../Mobile.js';

export class SidebarXPWA extends HTMLElement {

  constructor() {
    super();
    
    this.setStyles();
    this.innerHTML += '<close-xpwa></close-xpwa>';

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }
  }

  setStyles()
  {
    this.style.cssText += `
      display: block;
      position: fixed;
      top: 0;
      left: 20vw;
      right: 0;
      min-height: 100vh;
      width: 80vw;
      background: var(--white);
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
    `;
  }
}

customElements.define("sidebar-xpwa", SidebarXPWA);
