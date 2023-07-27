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

    const nav = document.querySelector('nav-xpwa');
    if(nav)
    {
      this.style.left = '10vw';
      this.style.width = '78vw';
    }
  }
}

customElements.define("content-xpwa", ContentXPWA);
