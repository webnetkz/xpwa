export class StubXPWA extends HTMLElement
{
  constructor()
  {
    super();    
  }
  
  createCloseButton()
  {
    this.innerHTML += `<close-xpwa style="color: var(--main-theme);"></close-xpwa>`;
  }

  static get observedAttributes()
  {
      return ['close'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
      case 'close':
        this.createCloseButton();
      break;
    }
  }
}

customElements.define("stub-xpwa", StubXPWA);
