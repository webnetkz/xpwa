import './components/core/core_components.js';
import './components/navigation/navigation_components.js';
import './components/messages/messages_components.js';

import { Card3DXPWA } from './components/decorative/Card3D.js';
import { ProgressBarXPWA } from './components/progress/ProgressBar.js';
import { PreloaderXPWA } from './components/progress/Preloader.js';

import { StepProcessingXPWA } from './components/progress/StepProcessing.js';


import { CheckboxXPWA } from './components/form/Checkbox.js';
import { RadioXPWA } from './components/form/Radio.js';
import { BorderLinesXPWA } from './components/form/BorderLines.js';

import { TabsXPWA } from './components/Tabs.js';
import { InputXPWA } from './components/form/Input.js';
import { SliderXPWA } from './components/sliders/Carusel.js';


export class DOM
{
    constructor()
    {
        this.setStyles();
    }

    setStyles()
    {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = "./xpwa/styles/xpwa.css";
        document.head.appendChild(linkElement);
    }
}