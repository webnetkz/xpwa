export class CloserXPWA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = '+';
    this.classList.add('closer');

    this.addEventListener('click', this.closeWindow);
  }

  closeWindow()
  {
    S.DOM.hide(this.parentNode);
  }
}

customElements.define("closer-xpwa", CloserXPWA);
