import { ShowerHidden } from './ShowerHidden.js';
import { MessagePWA } from './components/MessagePWA.js';

// Компоненты которые не требуют инициализации
import { CloserPWA } from './components/CloserPWA.js';
import { ProgressBarPWA } from './components/ProgressBarPWA.js';
import { ProgressRoundPWA } from './components/ProgressRoundPWA.js';
import { TabsPWA } from './components/TabsPWA.js';
import { InputPWA } from './components/InputPWA.js';
import { SliderPWA } from './components/SliderPWA.js';
import { Card3DPWA } from './components/Card3DPWA.js';


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