import { Mobile } from '../Mobile.js';

export class SidebarXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.classList.add('showElement');
    this.innerHTML += '<close-xpwa></close-xpwa>';
  }
}

customElements.define("sidebar-xpwa", SidebarXPWA);
