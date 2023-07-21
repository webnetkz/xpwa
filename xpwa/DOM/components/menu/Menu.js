import { Mobile } from '../../Mobile.js';

export class MenuXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.innerHTML += `<burger-xpwa></burger-xpwa>`;
  }

  setMobileStyles()
  {
    this.style.cssText += `
      flex-direction: column;
    `;
  }
}

customElements.define("menu-xpwa", MenuXPWA);
