export class CheckboxXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.innerHTML = '<input type="checkbox">';
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

customElements.define("checkbox-xpwa", CheckboxXPWA);
