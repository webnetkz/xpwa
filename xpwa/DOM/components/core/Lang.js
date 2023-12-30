export class LangXPWA extends HTMLElement {
  constructor() {
    super();

    this.addEventListener('click', this.changeLang);
  }

  static get observedAttributes() {
    return ['lang'];
  }

  changeLang() {
    const langVariables = document.querySelector('lang-x');
    console.log(langVariables);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
        case 'lang':
            alert(newValue); 
        break;
    }
  }
}

customElements.define("lang-x", LangXPWA);
