export class ItemXPWA extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.addEventListener('click', this.active);
  }

  active() {
    let activeItem = document.querySelector('dropdown-x item-x.active-x');
    activeItem ? activeItem.classList.remove('active-x') : this.classList.add('active-x');
    this.classList.add('active-x')    
  }
}

customElements.define("item-x", ItemXPWA);
