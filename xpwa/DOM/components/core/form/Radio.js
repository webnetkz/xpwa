export class RadioXPWA extends HTMLElement {
  constructor() {
    super();

    this.name = '';
    this.status = false;
  }
  
  connectedCallback() {
    const idElement = X.DOM.generateId();
    this.innerHTML += `
      <input class="radio-x radio-ios-x" id="${idElement}" name="${this.name}" type="radio" ${this.status}/>
      <label class="radio-btn-x" for="${idElement}"></label>`;
  }

  static get observedAttributes() {
    return ['name', 'checked'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'name':
        this.name = newValue;
      break;
      case 'checked':
        this.status = 'checked';
      break;
    }
  }
}

customElements.define("radio-x", RadioXPWA);