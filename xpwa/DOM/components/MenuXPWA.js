import { Mobile } from '../Mobile.js';

export class MenuXPWA extends HTMLElement {

  constructor() {
    super();
    
    this.setStyles();

    if(Mobile.isMobile())
    {
      this.setMobileStyles();
    }
  }

  setStyles()
  {
    this.style.cssText += `
      display: flex;
      justify-contentn: space-between;
      align-items: center;
      margin: 3px;
      background: var(--gray-gradient);
      width: 100%;
    `;

    let allChilds = this.querySelectorAll('*');
    
    allChilds.forEach((element) => {
      element.style.cssText += `
        padding: 5px 15px;
        border-radius: 7px;
        background: var(--white);
        margin: 0px 1.5px;
      `;

      element.addEventListener('mousemove', () => {
        element.style.cssText += `
          background: var(--gray);
          color: var(--white);
          cursor: pointer;
        `;
      });

      element.addEventListener('mouseout', () => {
        element.style.cssText += `
          background: var(--white);
          color: var(--black);
        `;
      });
    });
  }

  setMobileStyles()
  {
    this.style.cssText += `
      flex-direction: column;
    `;
  }
}

customElements.define("menu-xpwa", MenuXPWA);
