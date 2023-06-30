export class CloseXPWA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '+';

    this.addEventListener('click', this.closeWindow);
  }

  closeWindow()
  {
    DOM.hide(this.parentNode);
  }
}

customElements.define("close-xpwa", CloseXPWA);
