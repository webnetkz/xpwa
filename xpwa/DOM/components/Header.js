export class HeaderXPWA extends HTMLElement
{
  constructor()
  {
    super();
  }

  static get observedAttributes()
  {
    return ['position'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'position':
            this.style.position = 'fixed'; 
        break;
    }
  }
}

customElements.define("header-xpwa", HeaderXPWA);
