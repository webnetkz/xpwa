export class CloseXPWA extends HTMLElement
{
  constructor()
  {
    super();
    const shadow = this.attachShadow({mode: 'closed'});
    shadow.innerHTML = '+';

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
    switch(name)
    {
        case 'animation':
          this.animation = 'hideR';
        break;
    }
  }
}

customElements.define("close-xpwa", CloseXPWA);
