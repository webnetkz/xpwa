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
import { ChangeThemeXPWA } from './ChangeTheme.js';

import { InputXPWA } from './components/form/Input.js';

export class DOM {
    constructor() {
        this.setStyles();
    }

    setStyles() {
        const linkStyles = document.createElement("link");
        const linkFont = document.createElement("link");

        linkStyles.rel = "stylesheet";
        linkFont.rel = "stylesheet";
        linkStyles.type = 'text/css';
        linkFont.type = 'text/css';
        linkStyles.href = "./xpwa/styles/xpwa.css";
        linkFont.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';

        if(navigator.onLine) {
            document.head.appendChild(linkFont);
        }

        document.head.appendChild(linkStyles);

    }
}