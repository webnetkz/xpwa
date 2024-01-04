export class RadioXPWA extends HTMLElement {
  constructor() {
    super();

    this.name = 'radio';
  }
  
  connectedCallback() {
    setTimeout(() => {  
        const idElement = X.DOM.generateId();
        this.innerHTML += `
        <input class="radio-x radio-ios-x" id="${idElement}" name="${this.name}" type="radio"/>
        <label class="radio-btn-x" for="${idElement}"></label>`;
    });
  }
  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'name':
        if(newValue) {
          this.name = newValue;
        }
        break;
    }
  }
}

customElements.define("radio-x", RadioXPWA);