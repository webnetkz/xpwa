export class CheckboxXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.innerHTML += `
    <input type="checkbox">
    <label></label>`;
  }

  static get observedAttributes()
  {
      return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
      case 'name':
        this.querySelector('input').name = newValue;
      break;
    }
  }
}

customElements.define("checkbox-xpwa", CheckboxXPWA);
