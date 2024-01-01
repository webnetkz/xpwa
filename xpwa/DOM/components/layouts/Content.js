export class ContentPWA extends HTMLElement {
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
  
  customElements.define("content-x", ContentPWA);
  