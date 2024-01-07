export class CheckboxXPWA extends HTMLElement {
  constructor() {
    super();
    this.status = false;
    this.name = '';
  }
  
  connectedCallback() {
    setTimeout(() => {
      const idElement = X.DOM.generateId();
      this.innerHTML += `
        <input class="checkbox-x checkbox-ios-x" id="${idElement}" name="${this.name}" type="checkbox" ${this.status}/>
        <label class="checkbox-btn-x" for="${idElement}"></label>`;
    });
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

customElements.define("checkbox-x", CheckboxXPWA);