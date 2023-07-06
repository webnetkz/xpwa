import { Mobile } from '../Mobile.js';

export class ModalXPWA extends HTMLElement
{
  constructor()
  {
    super();
    const shadow = this.attachShadow({mode: 'closed'});
    
    this.setStyles();

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }
  }

  setStyles()
  {
    this.style.cssText += `
      width: 60vw;
      height: 50vh;
      border-radius: var(--radius);
      border-color: var(--border-color);
      box-shadow: var(--box-shadow);
      background: var(--white);
    
    .uchet-modal > div {
      padding: 5px 15px;
    }
    .uchet-modal-title {
      height: 60px;
      border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
      width: 90vw;
    `;
  }
}

customElements.define("modal-xpwa", ModalXPWA);
