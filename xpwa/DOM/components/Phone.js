export class PhoneXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.innerHTML = '<a href="#">&#9742;</a>';
  }

  static get observedAttributes()
  {
    return ['phone'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'phone':
          this.querySelector('a').href = newValue;
        break;
    }
  }
}

customElements.define("phone-xpwa", PhoneXPWA);
