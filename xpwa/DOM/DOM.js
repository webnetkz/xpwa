import { ShowerHidden } from './ShowerHidden.js';
import { MessageXPWA } from './components/MessageXPWA.js';

import { HeaderXPWA } from './components/HeaderXPWA.js';
import { ContentXPWA } from './components/ContentXPWA.js';
import { FooterXPWA } from './components/FooterXPWA.js';
import { MenuXPWA } from './components/MenuXPWA.js';


import { CloseXPWA } from './components/CloseXPWA.js';
import { ProgressBarXPWA } from './components/ProgressBarXPWA.js';
import { ProgressRoundXPWA } from './components/ProgressRoundXPWA.js';
import { TabsXPWA } from './components/TabsXPWA.js';
import { InputXPWA } from './components/InputXPWA.js';
import { SliderXPWA } from './components/SliderXPWA.js';
import { Card3DXPWA } from './components/Card3DXPWA.js';


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