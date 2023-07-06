import { Mobile } from '../Mobile.js';

export class ModalXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.modalTitle = 'Title';
    this.modalContent = 'Content';

    const shadow = this.attachShadow({mode: 'closed'});
    shadow.innerHTML += `<stub-xpwa>
      <div class="modal-title-xpwa">
        <h2>${this.modalTitle}</h2>
        <close-xpwa></close-xpwa>
      </div>
      <div class="modal-content-xpwa">
        ${this.modalContent}
      </div>
    </stub-xpwa>`;
    
    this.setStyles();

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }
  }

  setStyles()
  {
    this.style.cssText += `
      width: 60vw;
      height: 50vh;
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
    `;
    
    this.querySelector('.modal-content-xpwa').style.cssText = `
      padding: 5px 15px;
    `;
  }

  setMobileStyles()
  {
    this.style.cssText += `
      width: 90vw;
    `;
  }
}

customElements.define("modal-xpwa", ModalXPWA);
