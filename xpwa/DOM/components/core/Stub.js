export class StubXPWA extends HTMLElement {
  constructor() {
    super();    
  }
  
  createCloseButton() {
    this.innerHTML += `<close-x style="color: var(--main-theme);"></close-x>`;
  }

  static get observedAttributes() {
      return ['close'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'close':
        this.createCloseButton();
      break;
    }
  }
}

customElements.define("stub-x", StubXPWA);