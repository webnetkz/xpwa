import { ShowerHidden } from './xpwa/DOM/ShowerHidden.js';
import { MessageXPWA } from './xpwa/DOM/components/MessageXPWA.js';

// Компоненты которые не требуют инициализации
import { CloserXPWA } from './xpwa/DOM/components/CloserXPWA.js';
import { ProgressBarXPWA } from './xpwa/DOM/components/ProgressBarXPWA.js';
//import { ProgressRoundXPWA } from './xpwa/DOM/components/ProgressRoundXPWA.js';
import { TabsXPWA } from './xpwa/DOM/components/TabsXPWA.js';
//import { InputXPWA } from './xpwa/DOM/components/InputXPWA.js';
//import { SliderXPWA } from './xpwa/DOM/components/SliderXPWA.js';
import { Card3DXPWA } from './xpwa/DOM/components/Card3DXPWA.js';


export class DOM
{
    constructor()
    {
        window.query = this.query;
        window.queryAll = this.queryAll;

        this.sh = new ShowerHidden();
        this.hide = this.sh.hidden;
        this.setComponents();
    }

    query(element, parent=document)
    {
        return parent.querySelector(element);
    }

    queryAll(element, parent=document)
    {
        return parent.querySelectorAll(element);
    }

    setComponents()
    {
        new MessageXPWA();
    }
}