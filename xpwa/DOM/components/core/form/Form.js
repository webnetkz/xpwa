export class FormXPWA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
    <form-container-x class="animation-form-x">
      <form>${this.innerHTML}</form>
      <border-lines-x></border-lines-x>
    </form-container-x>`;
  }

  static get observedAttributes() {
    return ['animation-off'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'animation-off':
        if(newValue) {
          this.querySelector('form-container-x').classList.remove('animation-form-x');
          this.querySelector('border-lines-x').style.display = 'none';
        }
        break;
    }
  }
}

customElements.define("form-x", FormXPWA);
