export class FooterXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.attachShadow({mode: 'open'});
  }
}

customElements.define("footer-xpwa", FooterXPWA);
