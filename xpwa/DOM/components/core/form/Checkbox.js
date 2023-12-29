export class CheckboxXPWA extends HTMLElement {
  constructor() {
    super();
    
    // X.log(X.DOM.generateId());
    const idElement = X.DOM.generateId();
    this.innerHTML += `
    <input class="checkbox-x checkbox-ios-x" id="${idElement}" type="checkbox"/>
    <label class="checkbox-btn-x" for="${idElement}"></label>`;
  }

  static get observedAttributes() {
      return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'name':
        this.querySelector('input').name = newValue;
      break;
    }
  }
}

customElements.define("checkbox-x", CheckboxXPWA);