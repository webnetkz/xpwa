export class MessagePWA extends HTMLElement
{
  constructor() {
    super();
    this.innerHTML = this.innerText+'<closer-pwa></closer-pwa>';
    this.classList.add('block');
    this.classList.add('message-pwa');
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

customElements.define("message-pwa", MessagePWA);
