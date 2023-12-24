export class ResponsiveXPWA extends HTMLElement {
    constructor() {
      super();
  
      this.addEventListener('click', this.resize);
    }
  
    static get observedAttributes() {
      return ['src'];
    }
  
    resize() {
        if(this.style.maxHeight === '100px') {
            this.style.maxHeight = '100%';
        } else {
            this.style.maxHeight = '100px';
        }
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name) {
          case 'src':
              this.querySelector('img').src = newValue; 
          break;
      }
    }
  }
  
  customElements.define("responsive-x", ResponsiveXPWA);
  