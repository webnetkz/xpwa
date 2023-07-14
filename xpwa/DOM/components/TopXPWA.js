import { Mobile } from '../Mobile.js';

export class TopXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.attachShadow({ mode: 'open' });

    this.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }

}

customElements.define("top-xpwa", TopXPWA);
