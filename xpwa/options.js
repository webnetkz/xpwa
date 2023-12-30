// import './cursor.js';
// import { cursor } from './cursor.js';

class Options {

    constructor() {
        if(navigator.userAgent.includes('Chrome-Lighthouse')) {
			document.body.innerHTML = '<h1>LightHouse of Google</h1>';
		}

        window.OPT = this.getOptions();
    }


    getOptions() {

        let options = document.querySelector('options-x');
        
        if(options) {
            options = JSON.parse(document.querySelector('options-x').innerText);

            if(options?.coreUi) {
                if(options?.coreUi?.pwa) {
                    window.addEventListener('load', this.pwa)
                    this.pwa();
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
                    this.setOptionsVariable('--width-scroll-bar', options?.coreUi?.widthScrollBar);
                }
                if(options?.coreUi?.shadow) {
                    this.setOptionsVariable('--shadow', options?.coreUi?.shadow);
                }
                if(options?.coreUi?.blur) {
                    this.setOptionsVariable('--blur', options?.coreUi?.blur);
                }
                if(options?.coreUi?.cursor) {
                    cursor.init();
                    document.body.style.cursor = 'none';
                }
                if(options?.coreUi?.border) {
                    this.setOptionsVariable('--border', options?.coreUi?.border);
                }
                if(options?.coreUi?.heightHeader) {
                    this.setOptionsVariable('--height-header', options?.coreUi?.heightHeader);
                }
            }
    
            if(options?.colors) {
                if(options?.colors?.colorTheme) {
                    this.setOptionsVariable('--color-theme', options?.colors?.colorTheme);
                }
                if(options?.colors?.colorThemeUp) {
                    this.setOptionsVariable('--color-theme-up', options?.colors?.colorThemeUp);
                }
                if(options?.colors?.colorThemeDown) {
                    this.setOptionsVariable('--color-theme-down', options?.colors?.colorThemeDown);
                }
                if(options?.colors?.colorThemeDark) {
                    this.setOptionsVariable('--color-theme-dark', options?.colors?.colorThemeDark);
                }
                if(options?.colors?.colorThemeDarkUp) {
                    this.setOptionsVariable('--color-theme-dark-up', options?.colors?.colorThemeDarkUp);
                }
                if(options?.colors?.colorThemeDarkDown) {
                    this.setOptionsVariable('--color-theme-dark-down', options?.colors?.colorThemeDarkDown);
                }
                if(options?.colors?.white) {
                    this.setOptionsVariable('--white', options?.colors?.white);
                }
                if(options?.colors?.black) {
                    this.setOptionsVariable('--black', options?.colors?.black);
                }
            }

            return options;
        }
    }


    setOptionsVariable(variable, value) {
        document.documentElement.style.setProperty(variable, value);
    }


    pwa() {
        if('serviceWorker' in navigator) {
			window.addEventListener('load', function() {
				navigator.serviceWorker.register('./sw.js').then(function(registration) {
					console.log('ServiceWorker registration successful with scope: ', registration.scope);
				}, function(err) {
					console.log('ServiceWorker registration failed: ', err);
				});
			});
		}
    }
}

new Options();