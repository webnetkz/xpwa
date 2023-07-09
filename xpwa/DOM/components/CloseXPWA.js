export class CloseXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.innerHTML = '+';

    this.animation = 'hide';
    this.setStyles();
    this.addEventListener('click', this.closeWindow);
  }

  setStyles()
  {
    this.style.cssText += `
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

  static get observedAttributes()
  {
    return ['animation'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'animation':

        break;
    }
  }
}

customElements.define("close-xpwa", CloseXPWA);
