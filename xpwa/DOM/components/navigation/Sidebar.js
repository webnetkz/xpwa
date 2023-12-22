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
