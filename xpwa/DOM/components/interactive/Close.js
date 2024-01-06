export class CloseXPWA extends HTMLElement {
  constructor() {
    super();
    this.animation = 'hide';
  }
  
  connectedCallback() {
    this.innerHTML = `+`;
  
    this.addEventListener('click', this.hidden);
  }

  hidden() {
    const parentElement = this.parentElement;
    parentElement.classList.add('hiddenElement');

    setTimeout(() => {
      parentElement.style.display = 'none';
      parentElement.remove();
    }, 290)
  }
}

customElements.define("close-x", CloseXPWA);
