export class BorderLinesXPWA extends HTMLElement
{
  constructor()
  {
    super();
  }

  static get observedAttributes()
  {
    return ['x'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'x':
        break;
    }
  }
}

customElements.define("border-lines-xpwa", BorderLinesXPWA);
