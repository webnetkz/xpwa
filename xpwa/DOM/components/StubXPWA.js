export class StubXPWA extends HTMLElement
{
  constructor()
  {
    super();
    
    this.innerHTML += `<close-xpwa style="color: white;"></close-xpwa>`;
    this.setStyles();
  }

  setStyles()
  {
    this.style.cssText += `
      position: fixed;
      display: flex;
      top: 0;
      left: 0;
      justify-content: center;
      align-items: center;
      width: 100vw;
      height: 100vh;
      background: rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5px);
      z-index: 999999999;
    `;
  }
}

customElements.define("stub-xpwa", StubXPWA);
