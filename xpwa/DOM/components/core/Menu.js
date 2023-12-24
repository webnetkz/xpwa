import { BurgerXPWA } from "../interactive/Burger.js";

export class MenuXPWA extends HTMLElement {
  constructor() {
    super();
    
    this.createMenu();
  }
  
  createMenu() {
    if(!this.querySelector('burger-x')) {
      this.innerHTML = this.innerHTML + `<burger-x></burger-x>`;
    } return;
  }
}

customElements.define("menu-x", MenuXPWA);
