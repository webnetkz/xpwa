import { Mobile } from '../Mobile.js';

export class BlockXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.attachShadow({ mode: 'open' });
    this.setStyles();

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }
  }

  setStyles()
  {
    const styles = `
      :host {
        display: block;
        background: var(--gray-gradient);
        width: 98vw;
        min-height: 100px;
        background: var(--white);
        padding: 10px var(--padding);
        margin: var(--margin);
        border-radius: var(--radius);
        box-shadow: var(--shadow);
      }`;
      this.shadowRoot.innerHTML = `<style>${styles}</style>`;
  }

  setMobileStyles()
  {
    const mobileStyles = `
      :host {
        /* Здесь ваши мобильные стили */
      }
    `;
    this.shadowRoot.innerHTML += `<style>${mobileStyles}</style>`;
  }
}

customElements.define("block-xpwa", BlockXPWA);
