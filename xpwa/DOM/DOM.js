import { ShowerHidden } from './ShowerHidden.js';
import { MessageXPWA } from './components/Message.js';

import { HeaderXPWA } from './components/Header.js';
import { ContentXPWA } from './components/Content.js';
import { FooterXPWA } from './components/Footer.js';
import { MenuXPWA } from './components/Menu.js';
import { SidebarXPWA } from './components/Sidebar.js';
import { BlockXPWA } from './components/Block.js';
import { StubXPWA } from './components/Stub.js';
import { ModalXPWA } from './components/Modal.js';


import { CheckboxXPWA } from './components/Checkbox.js';
import { RadioXPWA } from './components/Radio.js';
import { ButtonXPWA } from './components/Button.js';
import { TopXPWA } from './components/Top.js';


import { CloseXPWA } from './components/Close.js';
import { ProgressBarXPWA } from './components/ProgressBar.js';
import { ProgressRoundXPWA } from './components/ProgressRound.js';
import { TabsXPWA } from './components/Tabs.js';
import { InputXPWA } from './components/Input.js';
import { SliderXPWA } from './components/Slider.js';
import { Card3DXPWA } from './components/Card3D.js';


export class DOM
{
    constructor()
    {
        window.query = this.query;
        window.queryAll = this.queryAll;

        this.showerHidden = new ShowerHidden();
        this.hide = this.showerHidden.hidden;
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