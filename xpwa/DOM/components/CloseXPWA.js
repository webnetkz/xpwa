export class CloseXPWA extends HTMLElement {
  constructor() {
    super();

    this.animation = 'hide';
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
    console.log(this.animation)
    if(this.animation == 'hideR')
    {
      DOM.hideR(this.parentNode);
      return;
    }

    DOM.hide(this.parentNode);
  }

  static get observedAttributes()
  {
    return ['animation'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    console.log(name);
    switch(name)
    {
        case 'animation':
          console.log(name);
          this.animation = 'hideR';
        break;
    }
  }
}

customElements.define("close-xpwa", CloseXPWA);
