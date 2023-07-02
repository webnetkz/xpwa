export class MessageXPWA extends HTMLElement
{
  constructor() {
    super();
    this.innerHTML = this.innerText+'<close-xpwa></closer-xpwa>';
  }

  connectedCallback()
  {

  }

  disconnectedCallback()
  {

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

  adoptedCallback()
  {
    // вызывается, когда элемент перемещается в новый документ
    // (происходит в document.adoptNode)
  }
}

customElements.define("message-xpwa", MessageXPWA);
