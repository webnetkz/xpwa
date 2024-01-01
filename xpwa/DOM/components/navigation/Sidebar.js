export class SidebarXPWA extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML += '<close-x></close-x>';
  }

  static get observedAttributes() {
    return ['left', 'right'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
        case 'left':
          this.style.left = '0';
          this.style.right = '20vw';
        break;
        case 'right':
          this.style.left = '20vw';
          this.style.right = '0';
        break;
    }
  }
}

customElements.define("sidebar-x", SidebarXPWA);
