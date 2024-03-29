export class ButtonXPWA extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['link', 'name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'link':
        if(newValue === window.location.pathname) {
          this.classList.add('active-x');
        }

        this.addEventListener('click', () => {
          location.href = newValue;
        });
      break;
      case 'name':
        this.name = newValue;
      break;
    }
  }
}

customElements.define("button-x", ButtonXPWA);