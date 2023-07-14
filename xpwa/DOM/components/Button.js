export class ButtonXPWA extends HTMLElement
{
  constructor()
  {
    super();
  }

  static get observedAttributes()
  {
    return ['attr'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'attr':
        break;
    }
  }
}

customElements.define("button-xpwa", ButtonXPWA);
