import { Mobile } from '../../Mobile.js';

export class MenuXPWA extends HTMLElement
{
  constructor()
  {
    super();
    
    let menuElements = this.getSettings();
    menuElements = menuElements.menu;
    
    menuElements.forEach(element => {
      this.innerHTML += `<button-xpwa link="${element.link}">${element.text}</button-xpwa>`;
    });

    this.innerHTML += `<burger-xpwa></burger-xpwa>`;
  }

  getSettings()
  {
    let settings = localStorage.getItem('xpwa');
    settings = JSON.parse(settings);
    return settings;
  }
}

customElements.define("menu-xpwa", MenuXPWA);
