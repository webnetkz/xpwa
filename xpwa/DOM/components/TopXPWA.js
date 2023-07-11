import { Mobile } from '../Mobile.js';

export class TopXPWA extends HTMLElement
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

    this.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
  }

  setStyles()
  {
    const styles = `
      :host {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        line-height: 5rem;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 50px;
        height: 50px;
        background: var(--main-theme);
        border-radius: 50%;
        z-index: 999999;
      }
      :host:hover {
        background: red;
      }
      :host:after {
        content: "\\2191";
        transform: scaleX(0.7);
        margin-bottom: 10px;
        color: white;
      }
      
      `;
      this.shadowRoot.innerHTML = `<style>${styles}</style>`;

      this.addEventListener('mousemove', () => {
        this.style.cssText = `
            cursor: pointer;
          `;
      });
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
