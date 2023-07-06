import { Mobile } from '../Mobile.js';

export class StubXPWA extends HTMLElement
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
      position: fixed;
      display: flex;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      z-index: 999999999;
    `;
  }
}

customElements.define("stub-xpwa", StubXPWA);
