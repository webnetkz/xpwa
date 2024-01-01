export class TosXPWA extends HTMLElement {
  constructor() {
    super();

    this.margin = '20px';
    this.style.top = this.margin;
  }
  
  connectedCallback() {
    this.innerHTML = `<tos-content-x>${this.innerHTML}</tos-content-x><close-x></closer-x>`;
  }

  static get observedAttributes() {
    return ['timer', 'left', 'right', 'bottom', 'bottom-right', 'bottom-left'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
        case 'timer':
            setTimeout(() => {
              this.querySelector('close-x').click();
            }, Number(newValue) * 1000);
        break;
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
  }
}

customElements.define("tos-x", TosXPWA);
