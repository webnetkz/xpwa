import { ShowerHidden } from './xXPWA/ShowerHidden.js';
import { MessageXPWA } from './xXPWA/components/MessageXPWA.js';

// Компоненты которые не требуют инициализации
import { CloserXPWA } from './xXPWA/components/CloserXPWA.js';
import { ProgressBarXPWA } from './xXPWA/components/ProgressBarXPWA.js';
import { ProgressRoundXPWA } from './xXPWA/components/ProgressRoundXPWA.js';
import { TabsXPWA } from './xXPWA/components/TabsXPWA.js';
import { InputXPWA } from './xXPWA/components/InputXPWA.js';
import { SliderXPWA } from './xXPWA/components/SliderXPWA.js';
import { Card3DXPWA } from './xXPWA/components/Card3DXPWA.js';


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