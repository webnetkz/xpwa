export class CheckboxXPWA extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = '<input type="checkbox">';
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

customElements.define("checkbox-xpwa", CheckboxXPWA);
