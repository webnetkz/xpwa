class Options {

    constructor() {
        this.getOptions();
        this.colors = this.getColors();
        console.log(this.colors);
    }

    getColors() {
        return {
            white: getComputedStyle(document.documentElement).getPropertyValue('--white'),
            black: getComputedStyle(document.documentElement).getPropertyValue('--black'),
        }
    }

    setLightTheme(colors) {
        console.log(2);
        // window.THEME = 'dark';
        document.documentElement.style.setProperty('--white', colors.white);
        document.documentElement.style.setProperty('--black', colors.black);
        document.documentElement.style.setProperty('--color-theme', getComputedStyle(document.documentElement).getPropertyValue('--color-theme'));
        document.documentElement.style.setProperty('--color-theme-up', getComputedStyle(document.documentElement).getPropertyValue('--color-theme-up'));
        document.documentElement.style.setProperty('--color-theme-down', getComputedStyle(document.documentElement).getPropertyValue('--color-theme-up'));
    }
    
    setDarkTheme(colors) {
        console.log(3);  
        document.documentElement.style.setProperty('--white', colors.black);
        document.documentElement.style.setProperty('--black', colors.white);
        document.documentElement.style.setProperty('--color-theme', getComputedStyle(document.documentElement).getPropertyValue('--color-theme'));
        document.documentElement.style.setProperty('--color-theme-up', getComputedStyle(document.documentElement).getPropertyValue('--color-theme-up'));
        document.documentElement.style.setProperty('--color-theme-down', getComputedStyle(document.documentElement).getPropertyValue('--color-theme-down'));
        // window.THEME = 'light';
    }

    changeTheme() {
        console.log(1);
        console.log(this.getColors());

        let colors = this.getColors();

        if(window.THEME === 'light') {
            this.setLightTheme(colors);
        } else {
            this.setDarkTheme(colors);
        }
    }

    getOptions() {
        let options = document.querySelector('options-x');
        
        if(options) {
            options = JSON.parse(document.querySelector('options-x').innerText);
            
            if(options?.coreUi) {
                if(options?.coreUi?.theme) {
                    window.THEME = options?.coreUi?.theme;
                }
                if(options?.coreUi?.padding) {
                    this.setOptionsVariable('--padding', options?.coreUi?.padding);
                }
                if(options?.coreUi?.margin) {
                    this.setOptionsVariable('--margin', options?.coreUi?.margin);
                }
                if(options?.coreUi?.radius) {
                    this.setOptionsVariable('--radius', options?.coreUi?.radius);
                }
                if(options?.coreUi?.shadow) {
                    this.setOptionsVariable('--shadow', options?.coreUi?.shadow);
                }
                if(options?.coreUi?.widthScrollBar) {
                    this.setOptionsVariable('--widthScrollBar', options?.coreUi?.widthScrollBar);
                }
            }
    
            if(options?.colors) {
                if(options?.colors?.main_theme) {
                    this.setOptionsVariable('--mainTheme', options?.colors?.mainTheme);
                }
                if(options?.colors?.mainThemeLight) {
                    this.setOptionsVariable('--mainThemeLight', options?.colors?.mainThemeLight);
                }
                if(options?.colors?.mainThemeDark) {
                    this.setOptionsVariable('--mainThemeDark', options?.colors?.mainThemeDark);
                }
            }
            console.log(window?.THEME);
        }
        }

    setOptionsVariable(variable, value) {
        document.documentElement.style.setProperty(variable, value);
    }
}
new Options();