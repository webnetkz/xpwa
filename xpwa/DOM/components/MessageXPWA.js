export class MessageXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.innerHTML = this.innerText+'<close-xpwa></closer-xpwa>';
  }

  static get observedAttributes()
  {
    return ['inputs', 'url'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'inputs':
            console.log(this.setInputs(newValue)); 
        break;
        case 'url':
            console.log(newValue);
        break;
    }
  }
}

customElements.define("message-xpwa", MessageXPWA);
