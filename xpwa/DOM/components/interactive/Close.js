export class CloseXPWA extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = '+';
  
    this.animation = 'hide';
    this.addEventListener('click', this.hidden);
  }

  hidden() {
    const parentElement = this.parentElement;
    parentElement.classList.add('hiddenElement');

    setTimeout(() => {
      parentElement.style.display = 'none';
      parentElement.remove();
    }, 290)
  }

  static get observedAttributes() {
    return ['animation'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'animation':

      break;
    }
  }
}

customElements.define("close-x", CloseXPWA);
