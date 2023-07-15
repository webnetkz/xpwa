import { Mobile } from '../Mobile.js';

export class SidebarXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.classList.add('showFromRightElement');
    this.innerHTML += '<close-xpwa></close-xpwa>';
  }
}

customElements.define("sidebar-xpwa", SidebarXPWA);
