import { Mobile } from '../../Mobile.js';

export class NavXPWA extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('mousemove', () => {
      this.style.cssText = `
      transition-duration: 400ms;
      left: 0;
      background: var(--bg);`;
    });

    document.body.addEventListener('click', () => {
      this.style.cssText = `
      transition-duration: 400ms;
      left: -19.5vw;
      background: var(--main-theme);`;

      if(Mobile.isMobile())
      {
        this.style.cssText = `
        left: -79vw;`;
      }
    });
  }
}

customElements.define("nav-x", NavXPWA);
