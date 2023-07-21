export class RadioXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.innerHTML = `<input type="radio"><span></span>`;
  }
}

customElements.define("radio-xpwa", RadioXPWA);
