import { Mobile } from '../Mobile.js';

export class HeaderXPWA extends HTMLElement
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
      align-items: center;
      position: relative;
      left: 0;
      background: var(--gray-gradient);
      min-height: 50px;
      width: 100vw;
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
    `;
  }

  static get observedAttributes()
  {
    return ['position'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'position':
            this.style.position = 'fixed'; 
        break;
    }
  }
}

customElements.define("header-xpwa", HeaderXPWA);
