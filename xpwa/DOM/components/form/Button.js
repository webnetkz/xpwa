export class ButtonXPWA extends HTMLElement
{
  constructor()
  {
    super();
  }

  static get observedAttributes()
  {
    return ['link'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
      case 'link':
        this.addEventListener('click', () =>
        {
          location.href = newValue;
        });
      break;
    }
  }
}

customElements.define("button-xpwa", ButtonXPWA);
