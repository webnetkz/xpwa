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
          left: 10vw;
          width: 75vw`;
      }
    });

    document.body.addEventListener('click', () => {
      if(contentBlock) {
        contentBlock.style.cssText = `
          left: 0;
          width: 1200px`;
      }
      this.style.cssText = `
        transition-duration: 400ms;
        left: -19.5vw;
        background: var(--color-theme);`;

      if(window.MOBILE.isMobile()) {
        this.style.cssText = `
        left: -79vw;`;
        if(contentBlock) {
          contentBlock.style.cssText = `
            width: 96vw`;
        }
      }
    });
  }

  checkContentBlock() {
    return document.querySelector('content-x');
  }
}

customElements.define("nav-x", NavXPWA);
