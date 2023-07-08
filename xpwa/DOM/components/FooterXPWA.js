import { Mobile } from '../Mobile.js';

export class FooterXPWA extends HTMLElement
{
  constructor()
  {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    shadow.textContent = this.textContent;

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
      background: var(--gray);
      min-width: 100vw;
      min-height: 100px;
      display: flex;
      justify-content: center;
      align-items: flex-end;
      color: var(--white);
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
    `;
  }
}

customElements.define("footer-xpwa", FooterXPWA);
