import { URLXPWA } from './xpwa/network/URL.js';
import { RequestXPWA } from './xpwa/network/Request.js';
import { LocalStorageXPWA } from './xpwa/storages/LocalStorage.js';
import { DOM } from './xpwa/DOM/DOM.js';

export class XPWA
{
    constructor()
    {    
        this.installXPWA();
    }

    installXPWA()
    {
        new URLXPWA();
        new LocalStorageXPWA();
        new RequestXPWA();
    }
}


window.onload = (() => {
    window.DOM = new DOM();
})();


const style = ['padding: 0.3rem 1rem;',
  'background: black;',
  'font-family: sans-serif;',
  'text-shadow: 0 2px 10px orange;',
  'font: 2rem/3 Georgia;',
  'border-radius: 17px;',
  'color: white;'].join('');

console.log('%c%s', style, 'xPWA');