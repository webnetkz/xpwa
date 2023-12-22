export class ChangeThemeXPWA extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `<checkbox-x class="change-theme-x"></checkbox-x>`;

    this.querySelector('label').addEventListener('click', this.changeTheme);
    this.querySelector('label').addEventListener('click', this.checkTheme);

    console.log(window.THEME);
  }

  checkTheme() {
    let checkbox = this.parentElement.querySelector('.checkbox-ios-x');
    if(window.THEME === 'dark') {
      window.THEME = 'light';
      checkbox.checked = false; 
      checkbox.classList.remove('checked');
    } else {
      window.THEME = 'dark';
      checkbox.checked = true; 
      checkbox.classList.add('checked');
    }
  }

  changeTheme() {
    if(window.THEME === 'light') {
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
      return ['theme'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'theme':
      break;
    }
  }
}

customElements.define("change-theme-x", ChangeThemeXPWA);