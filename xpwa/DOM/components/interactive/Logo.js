export class LogoXPWA extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = '<img>';
    this.addEventListener('click', this.redirect);
  }

  redirect() {
    location.href = '/';
  }
  
  static get observedAttributes() {
    return ['src'];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
        case 'src':
            this.querySelector('img').src = newValue; 
        break;
    }
  }
}

customElements.define("logo-x", LogoXPWA);
