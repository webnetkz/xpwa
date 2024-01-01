export class PWA extends HTMLElement {
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
  
  customElements.define("-x", PWA);
  