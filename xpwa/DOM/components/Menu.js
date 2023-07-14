import { Mobile } from '../Mobile.js';

export class MenuXPWA extends HTMLElement
{
  constructor()
  {
    super();
  }

  setMobileStyles()
  {
    this.style.cssText += `
      flex-direction: column;
    `;
  }
}

customElements.define("menu-xpwa", MenuXPWA);
