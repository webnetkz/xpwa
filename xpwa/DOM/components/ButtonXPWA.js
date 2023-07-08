export class ButtonXPWA extends HTMLElement
{
  constructor()
  {
    super();

    this.setStyles();
  }

  setStyles()
  {
    this.style.cssText += `
      color: var(--white);
      border-radius: var(--radius);
      padding: var(--padding) 15px;
      background: var(--main-theme);
      box-shadow: 0px 1px 3px 0px rgba(93, 100, 148, 0.20), 0px 4px 11px 0px rgba(37, 44, 97, 0.15)
    `;

    this.addEventListener('click', () => {
      this.style.cssText += `
        background: var(--main-theme);
        color: var(--white);
      `;
    });

    this.addEventListener('mousemove', () => {
      this.style.cssText += `
        background: var(--main-theme-light);
        color: var(--white);
        cursor: pointer;
        box-shadow: 0px 3px 6px 0px rgba(93, 100, 148, 0.20), 0px 4px 11px 0px rgba(37, 44, 97, 0.15)
      `;
    });

    this.addEventListener('mouseout', () => {
      this.style.cssText += `
        background: var(--main-theme);
        box-shadow: 0px 1px 3px 0px rgba(93, 100, 148, 0.20), 0px 4px 11px 0px rgba(37, 44, 97, 0.15)
      `;
    });
  }

  static get observedAttributes()
  {
    return ['x'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'x':
        break;
    }
  }
}

customElements.define("button-xpwa", ButtonXPWA);
