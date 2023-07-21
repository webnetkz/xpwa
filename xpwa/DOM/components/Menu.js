import { Mobile } from '../Mobile.js';

export class MenuXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.innerHTML += `<i class="burger-icon"><span></span><span></span><span></span></i>`;
  }

  setMobileStyles()
  {
    this.style.cssText += `
      flex-direction: column;
    `;
  }
}

customElements.define("menu-xpwa", MenuXPWA);
