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
            setTimeout(() => {
              this.querySelector('close-x').click();
            }, Number(newValue) * 1000);
        break;
    }
  }
}

customElements.define("tos-x", TosXPWA);
