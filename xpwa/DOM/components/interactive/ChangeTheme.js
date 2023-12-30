export class ChangeThemeXPWA extends HTMLElement {
  constructor() {
    super();
    setTimeout(() => {
      this.THEME = 'light';
      if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.THEME = 'dark';
      }
      
      this.innerHTML = `<checkbox-x class="change-theme-x"></checkbox-x>`;
      this.addEventListener('click', this.changeTheme.bind(this));
      console.log(this.THEME);
    });
  }
  
  
  connectedCallback() {
    
  }
  
  
  changeTheme() {
    X.log(this.THEME);
    if(this.THEME === 'light') {
      document.documentElement.style.setProperty('--white', window?.OPT?.colors?.black);
      document.documentElement.style.setProperty('--black', window?.OPT?.colors?.white);
      document.documentElement.style.setProperty('--color-theme', window?.OPT.colors?.colorThemeDark);
      document.documentElement.style.setProperty('--color-theme-up', window?.OPT.colors?.colorThemeDarkUp);
      document.documentElement.style.setProperty('--color-theme-down', window?.OPT.colors?.colorThemeDarkDonw);

      this.THEME = 'dark';
      return;
    } else {
      document.documentElement.style.setProperty('--white', window?.OPT?.colors?.white);
      document.documentElement.style.setProperty('--black', window?.OPT?.colors?.black);
      document.documentElement.style.setProperty('--color-theme', window?.OPT?.colors?.colorTheme);
      document.documentElement.style.setProperty('--color-theme-up', window?.OPT.colors?.colorThemeUp);
      document.documentElement.style.setProperty('--color-theme-down', window?.OPT.colors?.colorThemeDonw);

      this.THEME = 'light';
      return;
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