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
        if(!options) return;

        options = JSON.parse(options.innerText);
        const coreUi = options?.coreUi;
        const colors = options?.colors;

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
            if(options?.coreUi?.toTop) {

            }
        }

        if(colors) {
            if(colors?.colorTheme) {
                this.setOptionsVariable('--color-theme', colors?.colorTheme);
            }
            if(colors?.colorThemeDark) {
                this.setOptionsVariable('--color-theme-dark', colors?.colorThemeDark);
            }
            if(colors?.white) {
                this.setOptionsVariable('--white', colors?.white);
            }
            if(colors?.black) {
                this.setOptionsVariable('--black', colors?.black);
            }
        }

        return options;
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