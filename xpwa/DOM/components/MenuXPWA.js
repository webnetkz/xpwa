import { Mobile } from '../Mobile.js';

export class MenuXPWA extends HTMLElement
{
  constructor()
  {
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
      display: flex;
      position: relative;
      justify-contentn: space-between;
      align-items: center;
      margin: var(--margin);
      background: var(--gray-gradient);
      width: 100%;
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
      flex-direction: column;
    `;
  }
}

customElements.define("menu-xpwa", MenuXPWA);
