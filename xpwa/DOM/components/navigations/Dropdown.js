export class DropdownXPWA extends HTMLElement {
  constructor() {
    super();

    this.status = 'close';

    this.addEventListener('click', this.openDropdown);
  }
  
  connectedCallback() {
    this.querySelectorAll('item-x').forEach(i => { i.style.display = 'none'});
  }

  openDropdown(event) {
    if(this.status === 'close') {
      this.status = 'open';
      this.querySelectorAll('item-x').forEach(i => { 
        if(i.parentNode == this) {
          i.style.display = 'block';
        }
      });
      this.classList.add('open-x');
    } else {
      if(event.target == this.querySelector('head-x')) {
        this.status = 'close';
        this.querySelectorAll('item-x').forEach(i => { i.style.display = 'none'});
        this.classList.remove('open-x');
      }
    }
  }

  static get observedAttributes() {
    return ['header'];
  }


  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'header':
        this.insertAdjacentHTML('afterbegin', `<head-x>${newValue}</head-x>`);
      break;
    }
  }
}

customElements.define("dropdown-x", DropdownXPWA);
