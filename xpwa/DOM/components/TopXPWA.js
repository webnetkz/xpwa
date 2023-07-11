import { Mobile } from '../Mobile.js';

export class TopXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.attachShadow({ mode: 'open' });
    this.setStyles();

    console.log(123);

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }

    document.body.appendChild(this);
  }

  setStyles()
  {
    const styles = `
      :host {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: red;
        z-index: 99;
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

customElements.define("top-xpwa", TopXPWA);
