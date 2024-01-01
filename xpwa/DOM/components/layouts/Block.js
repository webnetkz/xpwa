export class BlockPWA extends HTMLElement {
    constructor() {
      super();
      
    }
    
    connectedCallback() {

    }

  
    static get observedAttributes() {
      return [];
    }
  
  
    attributeChangedCallback(name, oldValue, newValue) {
      switch(name) {
      }
    }
  }
  
  customElements.define("block-x", BlockPWA);
  