export class ChangeThemeXPWA extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <checkbox-x class="change-theme-x"></checkbox-x>`;

    this.querySelector('label').addEventListener('click', this.changeTheme);
  }

  changeTheme() {
    const nowWhiteColor = getComputedStyle(document.documentElement).getPropertyValue('--white');

    if(nowWhiteColor === '#FFF') {
      document.documentElement.style.setProperty('--white', '#1a1a1a');
      document.documentElement.style.setProperty('--black', '#FFF');
      document.documentElement.style.setProperty('--main-theme', 'yellow');
    } else {
      document.documentElement.style.setProperty('--white', '#FFF');
      document.documentElement.style.setProperty('--black', '#000');
      document.documentElement.style.setProperty('--main-theme', '#0140EB');
    }
  }

  static get observedAttributes() {
      return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'name':
        this.querySelector('input').name = newValue;
      break;
    }
  }
}

customElements.define("change-theme-x", ChangeThemeXPWA);