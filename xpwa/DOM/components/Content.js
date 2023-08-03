export class ContentXPWA extends HTMLElement
{
  constructor()
  {
    super();

    const header = document.querySelector('header-xpwa');
    if(header && header.getAttribute('position') == 'fixed')
    {
      this.style.top = '70px';
    }
  }
}

customElements.define("content-xpwa", ContentXPWA);
