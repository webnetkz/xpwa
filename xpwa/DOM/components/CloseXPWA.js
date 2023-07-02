export class CloseXPWA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '+';
    this.setStyles();
    this.addEventListener('click', this.closeWindow);
  }

  setStyles()
  {
    this.style.cssText = `
      position: absolute;
      top: 9px;
      right: 9px;
      width: 20px;
      font-size: 1.5rem;
      transform: rotate(45deg);
    `;
  }

  closeWindow()
  {
    DOM.hide(this.parentNode);
  }
}

customElements.define("close-xpwa", CloseXPWA);
