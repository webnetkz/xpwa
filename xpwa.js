import { URLXPWA } from './xpwa/network/URLXPWA.js';
import { RequestXPWA } from './xpwa/network/RequestXPWA.js';
import { LocalStorageXPWA } from './xpwa/storages/LocalStorageXPWA.js';
import { DOM } from './xpwa/DOM/DOM.js';

export class XPWA
{
    constructor()
    {    
        this.setStyles();
        this.installXPWA();
    }

    setStyles()
    {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = "./xpwa/styles/xpwa.css";
        document.head.appendChild(linkElement);
    }

    installXPWA()
    {
        new URLXPWA();
        new LocalStorageXPWA();
        new RequestXPWA();
    }
}


window.onload = (() => {
    window.P = new XPWA();
    window.DOM = new DOM();
    
    window.log = console.log;
    window.req = RequestXPWA.request;
})();


const style = ['padding: 0.3rem 1rem;',
  'background: black;',
  'font-family: sans-serif;',
  'text-shadow: 0 2px 10px orange;',
  'font: 2rem/3 Georgia;',
  'border-radius: 17px;',
  'color: white;'].join('');

console.log('%c%s', style, 'xPWA');