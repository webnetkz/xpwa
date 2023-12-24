export class FormXPWA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML += `
    <form-container-x>
      <form></form>
    </form-container-x>`;
  }

  static get observedAttributes() {
    return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'name':
        this.querySelector('input').name = newValue;
        break;
    }
  }
}

customElements.define("form-x", FormXPWA);
