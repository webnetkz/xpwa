export class CloseXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.innerHTML = '+';

    this.animation = 'hide';
    this.addEventListener('click', this.closeWindow);
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
