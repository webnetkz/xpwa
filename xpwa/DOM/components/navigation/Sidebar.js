export class SidebarXPWA extends HTMLElement
{
  constructor() {
    super();
    this.classList.add('show-from-right-sidebar-x');
    this.innerHTML += '<close-x></close-x>';
  }

  static get observedAttributes() {
    return ['position'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
        case 'position':
          switch(newValue) {
            case 'left':
              this.classList.remove('show-from-right-sidebar-x');
              this.classList.add('show-from-left-sidebar-x');
              this.style.left = '0';
              this.style.right = '20vw';
            break;
          }
        break;
        default:
          this.style.left = '20vw';
          this.style.right = '0';
        break;
    }
  }
}

customElements.define("sidebar-x", SidebarXPWA);
