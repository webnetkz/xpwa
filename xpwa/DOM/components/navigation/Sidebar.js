import { Mobile } from '../../Mobile.js';

export class SidebarXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.classList.add('showFromRightElement');
    this.innerHTML += '<close-x></close-x>';
  }
}

customElements.define("sidebar-x", SidebarXPWA);
