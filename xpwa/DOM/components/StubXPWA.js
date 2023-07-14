export class StubXPWA extends HTMLElement
{
  constructor()
  {
    super();
    
    this.innerHTML += `<close-xpwa style="color: white;"></close-xpwa>`;
  }
}

customElements.define("stub-xpwa", StubXPWA);
