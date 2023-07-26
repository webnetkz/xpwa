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

    this.lessContent();
  }

  lessContent()
  {
    const nav = document.querySelector('nav-xpwa');

    if(nav && nav.style.left == 0)
    {
      this.style.left = '10vw';
      this.style.width = '79vw';
    }
    else
    {
      this.style.left = '0.5vw';
      this.style.width = '80vw';
    }
  }
}

customElements.define("content-xpwa", ContentXPWA);
