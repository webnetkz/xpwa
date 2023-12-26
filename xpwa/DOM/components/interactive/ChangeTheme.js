export class ChangeThemeXPWA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<checkbox-x class="change-theme-x"></checkbox-x>`;

    this.querySelector('label').addEventListener('click', () => this.changeTheme());
    window.THEME = 'light';
  }

  changeTheme() {
    if(window.THEME === 'light') {
      document.documentElement.style.setProperty('--white', window?.OPT.colors.black);
      document.documentElement.style.setProperty('--black', window?.OPT.colors.white);
      document.documentElement.style.setProperty('--color-theme', window?.OPT.colors.colorThemeDark);
      window.THEME = 'dark';
    } else {
      document.documentElement.style.setProperty('--white', window?.OPT.colors.white);
      document.documentElement.style.setProperty('--black', window?.OPT.colors.black);
      document.documentElement.style.setProperty('--color-theme', window?.OPT.colors.colorTheme);
      window.THEME = 'light';
    }
  }

  // checkTheme() {
  //   let checkbox = this.parentElement.querySelector('.checkbox-ios-x');
  //   if(checkbox.checked) {
  //     checkbox.checked = false; 
  //     checkbox.classList.remove('checked');
  //   } else {
  //     checkbox.checked = true; 
  //     checkbox.classList.add('checked');
  //   }
  // }
}


customElements.define("change-theme-x", ChangeThemeXPWA);