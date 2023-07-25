export class NavXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.innerHTML += `<button-xpwa close="close">Close</button-xpwa>`;

    const button = this.querySelector('button-xpwa[close="close"]');
    
    this.setButtonStyle(button);
    button.addEventListener('click',() => {
      this.style.cssText = `
        left: -88vw;
        background: var(--main-theme);`;
    });

    this.openNav();
  }

  setButtonStyle(button)
  {
    button.style.cssText = `
      position: absolute;
      bottom: 10px;
      left: 2.1vw;
    `;
  }

  openNav()
  {
    this.addEventListener('mousemove', () => {
      this.style.cssText = `
      transition-duration: 400ms;
      left: 0vw;
      background: var(--bg);`;
    });
  }

}

customElements.define("nav-xpwa", NavXPWA);
