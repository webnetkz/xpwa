export class TosXPWA extends HTMLElement {
  constructor() {
    super();
    this.margin = '20px';
    this.style.top = this.margin;
    this.innerHTML = this.innerHTML+'<close-x></closer-x>';
  }

  connectedCallback() {
    setTimeout(() => {
      this.querySelector('close-x').click();
    }, 7000);
  }

  static get observedAttributes() {
    return ['timer', 'position'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
        case 'timer':
            setTimeout(() => {
              this.querySelector('close-x').click();
            }, Number(newValue) * 1000);
        break;
        case 'position':
          switch(newValue) {
            case 'left':
              this.style.top = this.margin;
              this.style.left = this.margin;
            break;
            case 'right':
              this.style.top = this.margin;
              this.style.right = this.margin;
            break;
            case 'bottom':
              this.style.top = '';
              this.style.bottom = this.margin;
            break;
            case 'bottom-left':
              this.style.top = '';
              this.style.bottom = this.margin;
              this.style.left = this.margin;
            break;
            case 'bottom-right':
              this.style.top = '';
              this.style.bottom = this.margin;
              this.style.right = this.margin;
            break;
          }
        break;
    }
  }
}

customElements.define("tos-x", TosXPWA);
