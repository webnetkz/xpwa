import { ShowerHidden } from './xpwa/ShowerHidden.js';
import { MessagePWA } from './xpwa/components/MessagePWA.js';

// Компоненты которые не требуют инициализации
import { CloserPWA } from './xpwa/components/CloserPWA.js';
import { ProgressBarPWA } from './xpwa/components/ProgressBarPWA.js';
import { ProgressRoundPWA } from './xpwa/components/ProgressRoundPWA.js';
import { TabsPWA } from './xpwa/components/TabsPWA.js';
import { InputPWA } from './xpwa/components/InputPWA.js';
import { SliderPWA } from './xpwa/components/SliderPWA.js';
import { Card3DPWA } from './xpwa/components/Card3DPWA.js';


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
        new MessagePWA();
    }
}