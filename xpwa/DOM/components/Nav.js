export class NavXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.innerHTML += `<button-xpwa class="close-nav">Close</button-xpwa>`;

    this.querySelector('.close-nav').style.cssText = `
      position: absolute;
      bottom: 10px;
    `;
  }
}

customElements.define("nav-xpwa", NavXPWA);
