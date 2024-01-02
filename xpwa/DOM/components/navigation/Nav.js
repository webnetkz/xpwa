export class NavXPWA extends HTMLElement {
  constructor() {
    super();
    
    this.contentBlock = document.querySelector('content-x');
  }
  
  connectedCallback() {
    if(!!this.getAttribute('fixed') === false) {
      this.createListener();
    }
  }

  createListener() {
    this.addEventListener('mousemove', () => {
      this.style.cssText = `
        transition-duration: 400ms;
        left: 0;
        background: rgba(0, 0, 0, 0);`;
      if(this.contentBlock) {
        this.contentBlock.style.cssText = `
          left: 10vw;
          width: 75vw`;
      }
    });

    document.body.addEventListener('click', () => {
      if(this.contentBlock) {
        this.contentBlock.style.cssText = `
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
        if(this.contentBlock) {
          this.contentBlock.style.cssText = `
            width: 96vw`;
        }
      }
    });
  }

  static get observedAttributes() {
    return ['fixed'];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'fixed':
        if(!window.MOBILE.isMobile()) {
          this.style.left = '0';
          this.style.background = 'rgba(0, 0, 0, 0)';
          if(this.contentBlock) {
            this.contentBlock.style.cssText = `
              left: 10vw;
              width: 75vw;`;
          }
        }
      break;
    }
  }
}

customElements.define("nav-x", NavXPWA);
