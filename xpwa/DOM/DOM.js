// import '../styles/xpwa.css';
import './Mobile.js';

import './components/core/core_components.js';
import './components/navigation/navigation_components.js';
import './components/messages/messages_components.js';
import './components/progress/progress_components.js';

import { StepProcessingXPWA } from './components/progress/StepProcessing.js';

import { Card3DXPWA } from './components/decorative/Card3D.js';
import { CaruselXPWA } from './components/sliders/Carusel.js';



import { CheckboxXPWA } from './components/form/Checkbox.js';
import { RadioXPWA } from './components/form/Radio.js';
import { BorderLinesXPWA } from './components/form/BorderLines.js';

import { TabsXPWA } from './components/Tabs.js';
import { ChangeThemeXPWA } from './components/ChangeTheme.js';

import { InputXPWA } from './components/form/Input.js';

export class DOM {
    constructor() {
        this.setStyles();
        this.getOptions();
    }

    setStyles() {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = 'text/css';
        linkElement.href = "./xpwa/styles/xpwa.css";
        document.head.appendChild(linkElement);
    }

    getOptions() {
        let options = JSON.parse(document.querySelector('body').getAttribute('x-options'));
        
        if(options?.core_ui) {
            if(options?.core_ui?.padding) {
                this.setOptionsVariable('--padding', options?.core_ui?.padding);
            }
            if(options?.core_ui?.margin) {
                this.setOptionsVariable('--margin', options?.core_ui?.margin);
            }
            if(options?.core_ui?.radius) {
                this.setOptionsVariable('--radius', options?.core_ui?.radius);
            }
            if(options?.core_ui?.shadow) {
                this.setOptionsVariable('--shadow', options?.core_ui?.shadow);
            }
            if(options?.core_ui?.width_scroll_bar) {
                this.setOptionsVariable('--width-scroll-bar', options?.core_ui?.width_scroll_bar);
            }
        }

        if(options?.colors) {
            if(options?.colors?.main_theme) {
                this.setOptionsVariable('--main-theme', options?.colors?.main_theme);
            }
            if(options?.colors?.main_theme_light) {
                this.setOptionsVariable('--main-theme-light', options?.colors?.main_theme_light);
            }
            if(options?.colors?.main_theme_dark) {
                this.setOptionsVariable('--main-theme-dark', options?.colors?.main_theme_dark);
            }
        }
    }

    setOptionsVariable(variable, value) {
        document.documentElement.style.setProperty(variable, value);
    }
}