export class TosXPWA extends HTMLElement {
  constructor() {
    super();
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
          const margin = '20px';
          switch(newValue) {
            case 'left':
              this.style.left = margin;
            break;
            case 'right':
              this.style.right = margin;
            break;
            case 'bottom':
              this.style.top = '';
              this.style.bottom = margin;
            break;
            case 'bottom-left':
              this.style.bottom = margin;
              this.style.left = margin;
            break;
            case 'bottom-right':
              this.style.bottom = margin;
              this.style.right = margin;
            break;
            default:
              this.style.top = margin;
            break;
          }
        break;
    }
  }
}

customElements.define("tos-x", TosXPWA);
