import { BurgerXPWA } from "./Burger.js";

export class MenuXPWA extends HTMLElement
{
  constructor()
  {
    super();
    
    let menuElements = this.getSettings();
    menuElements = menuElements.menu;
    
    menuElements.forEach(element => {
      this.innerHTML += `<button-x link="${element.link}">${element.text}</button-x>`;
    });

    this.innerHTML += `<burger-x></burger-x>`;
  }

  getSettings()
  {
    let settings = localStorage.getItem('xpwa-menu');
    settings = JSON.parse(settings);
    return settings;
  }
}

customElements.define("menu-x", MenuXPWA);
