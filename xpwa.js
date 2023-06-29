import { ShowerHidden } from './xpwa/ShowerHidden.js';
import { MessageXPWA } from './xpwa/components/MessageXPWA.js';

// Компоненты которые не требуют инициализации
import { CloserXPWA } from './xpwa/components/CloserXPWA.js';
import { ProgressBarXPWA } from './xpwa/components/ProgressBarXPWA.js';
//import { ProgressRoundXPWA } from './xpwa/components/ProgressRoundXPWA.js';
import { TabsXPWA } from './xpwa/components/TabsXPWA.js';
//import { InputXPWA } from './xpwa/components/InputXPWA.js';
//import { SliderXPWA } from './xpwa/components/SliderXPWA.js';
import { Card3DXPWA } from './xpwa/components/Card3DXPWA.js';


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