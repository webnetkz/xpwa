export class BlockPWA extends HTMLElement {
    constructor() {
      super();
      
    }
    
    connectedCallback() {

    }

  
    static get observedAttributes() {
      return ['column'];
    }
  
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name) {
        case 'column':
          this.style.flexDirection = 'column';
          this.style.alignItems = 'flex-start';
        break;
      }
    }
  }
  
  customElements.define("block-x", BlockPWA);
  