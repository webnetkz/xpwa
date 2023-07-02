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
      background: red;
    `;

    let allChilds = this.querySelectorAll('*');
    
    allChilds.forEach((element) => {
      element.style.cssText += `
        padding: 5px 15px;
        border-radius: 7px;
        border: 1px solid #000;
        margin: 0px 1.5px;
      `;

      element.addEventListener('mousemove', () => {
        element.style.cssText += `
          background: blue;
          cursor: pointer;
        `;
      });

      element.addEventListener('mouseout', () => {
        element.style.cssText += `
          background: white;
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
