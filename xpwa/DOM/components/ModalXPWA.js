import { Mobile } from '../Mobile.js';

export class ModalXPWA extends HTMLElement
{
  constructor()
  {
    super();
  }

  connectedCallback() {
    this.rendering();
    this.setStyles();

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }
  }

  rendering()
  {
    if(this.querySelector(".modal-xpwa")) return;
    
    this.innerHTML = `
      <div class="modal-title-xpwa">
        <h2>${this.modalTitle}</h2>
      </div>
      <div class="modal-content-xpwa">
        123
      </div>`;
  }

  setStyles()
  {
    this.style.cssText += `
      width: 60vw;
      height: 50vh;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background: var(--white);
      border-radius: var(--radius);
      border-color: var(--border-color);
      box-shadow: var(--box-shadow);
      background: var(--white);
    `;

    this.querySelector('.modal-title-xpwa').style.cssText = `
      height: 60px;
      border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px;
    `;
    
    this.querySelector('.modal-content-xpwa').style.cssText = `
      padding: 5px 15px;
      height: 98%;
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
      width: 90vw;
    `;
  }
  static get observedAttributes()
  {
    return ['modal-title'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'modal-title':
            //this.querySelector('.modal-title-xpwa h2').innerText = newValue;
        break;
    }
  }
}

customElements.define("modal-xpwa", ModalXPWA);
