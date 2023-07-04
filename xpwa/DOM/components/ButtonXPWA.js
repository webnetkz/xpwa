export class ButtonXPWA extends HTMLElement {
  constructor() {
    super();

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

customElements.define("button-xpwa", ButtonXPWA);
