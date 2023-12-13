//import '../styles/xpwa.css';
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
import { InputXPWA } from './components/form/Input.js';

import { Mobile } from './Mobile.js';


export class DOM {
    constructor() {
        this.setStyles();
        this.MOBILE = new Mobile();
    }

    setStyles() {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.type = 'text/css';
        linkElement.href = "./xpwa/styles/xpwa.css";
        document.head.appendChild(linkElement);
    }
}