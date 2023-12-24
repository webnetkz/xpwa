export class NavXPWA extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('mousemove', () => {
      this.style.cssText = `
      transition-duration: 400ms;
      left: 0;
      background: rgba(0, 0, 0, 0);
      `;
    });

    document.body.addEventListener('click', () => {
      this.style.cssText = `
      transition-duration: 400ms;
      left: -19.5vw;
      background: var(--color-theme);`;

      if(window.MOBILE.isMobile()) {
        this.style.cssText = `
        left: -79vw;`;
      }
    });
  }
}

customElements.define("nav-x", NavXPWA);
