export class RadioXPWA extends HTMLElement
{
  constructor()
  {
    super();
    const shadow = this.attachShadow({mode: 'closed'});
    shadow.innerHTML = '<input type="radio">';

    this.setStyles();
  }

  setStyles()
  {
    this.style.cssText += `
      
    `;
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

customElements.define("radio-xpwa", RadioXPWA);
