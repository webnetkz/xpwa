import './cursor.js';
import { cursor } from './cursor.js';

class Options {

    constructor() {
        this.getOptions();
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
            }
        }
    }


    setOptionsVariable(variable, value) {
        document.documentElement.style.setProperty(variable, value);
    }
}

new Options();