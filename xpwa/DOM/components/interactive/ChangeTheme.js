export class ChangeThemeXPWA extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `<checkbox-x class="change-theme-x"></checkbox-x>`;

    this.querySelector('label').addEventListener('click', () => this.changeTheme());
    console.log(window?.THEME);
  }

  // checkTheme() {
  //   let checkbox = this.parentElement.querySelector('.checkbox-ios-x');
  //   if(window.THEME === 'dark') {
  //     window.THEME = 'light';
  //     checkbox.checked = false; 
  //     checkbox.classList.remove('checked');
  //   } else {
  //     window.THEME = 'dark';
  //     checkbox.checked = true; 
  //     checkbox.classList.add('checked');
  //   }
  // }
}


customElements.define("change-theme-x", ChangeThemeXPWA);