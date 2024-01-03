export class HeaderXPWA extends HTMLElement {
  constructor() {
    super();
  }
  
  static get observedAttributes() {
    return ['fill'];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
        case 'fill':
            this.style.background = 'var(--color-theme)'; 
        break;
    }
  }
}

customElements.define("header-x", HeaderXPWA);