export class MessageXPWA extends HTMLElement
{
  constructor() {
    super();
    this.setStyles();
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

  setStyles()
  {
    this.style.cssText += `
      position: fixed;
      top: 20px;
      right: 20px;
      width: 300px;
      min-height: 70px;
      padding: 5px;
      border: 1px solid black;
      border-radius: 12px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    `;
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
