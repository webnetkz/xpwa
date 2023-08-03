import { ShowerHidden } from './ShowerHidden.js';
import { MessageXPWA } from './components/Message.js';

import { HeaderXPWA } from './components/Header.js';
import { ContentXPWA } from './components/Content.js';
import { FooterXPWA } from './components/Footer.js';
import { MenuXPWA } from './components/menu/Menu.js';
import { BurgerXPWA } from './components/menu/Burger.js';
import { SidebarXPWA } from './components/Sidebar.js';
import { BlockXPWA } from './components/Block.js';
import { StubXPWA } from './components/Stub.js';
import { ModalXPWA } from './components/Modal.js';
import { StepProcessingXPWA } from './components/progress/StepProcessing.js';


import { CheckboxXPWA } from './components/form/Checkbox.js';
import { RadioXPWA } from './components/form/Radio.js';
import { ButtonXPWA } from './components/form/Button.js';
import { BorderLinesXPWA } from './components/form/BorderLines.js';
import { TopXPWA } from './components/Top.js';
import { NavXPWA } from './components/Nav.js';
import { PhoneXPWA } from './components/Phone.js';

import { CloseXPWA } from './components/Close.js';
import { ProgressBarXPWA } from './components/progress/ProgressBar.js';
import { PreloaderXPWA } from './components/progress/Preloader.js';
import { TabsXPWA } from './components/Tabs.js';
import { InputXPWA } from './components/form/Input.js';
import { SliderXPWA } from './components/slider/Slider.js';
import { Card3DXPWA } from './components/Card3D.js';


export class DOM
{
    constructor()
    {
        this.setStyles();

        document.body.appendChild(document.createElement('top-xpwa'));

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

    setStyles()
    {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = "./xpwa/styles/xpwa.css";
        document.head.appendChild(linkElement);
    }

    setComponents()
    {
        new MessageXPWA();
    }
}