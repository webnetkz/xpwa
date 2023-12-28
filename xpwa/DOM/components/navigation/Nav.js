export class NavXPWA extends HTMLElement {
  constructor() {
    super();

    let contentBlock = this.checkContentBlock();

    this.addEventListener('mousemove', () => {
      this.style.cssText = `
        transition-duration: 400ms;
        left: 0;
        background: rgba(0, 0, 0, 0);`;
      if(contentBlock) {
        contentBlock.style.cssText = `
          left: 5vw;`;
      }
    });

    document.body.addEventListener('click', () => {
      if(contentBlock) {
        contentBlock.style.cssText = `
          left: 0;`;
      }
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

  checkContentBlock() {
    return document.querySelector('content-x');
  }
}

customElements.define("nav-x", NavXPWA);
