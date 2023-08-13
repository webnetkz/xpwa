export class TosXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.innerHTML = this.innerHTML+'<close-x></closer-x>';
  }

  static get observedAttributes()
  {
    return ['timer'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'timer':
            
        break;
    }
  }
}

customElements.define("tos-x", TosXPWA);
