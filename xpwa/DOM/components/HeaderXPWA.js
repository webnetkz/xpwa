import { Mobile } from '../Mobile.js';

export class HeaderXPWA extends HTMLElement {

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
      background: green;
      width: 100%;
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
