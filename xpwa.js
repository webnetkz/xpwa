import './xpwa/options.js';
import { DOM } from './xpwa/DOM/DOM.js';

export class XPWA {
  constructor() {
  }

  log(logData) {
    console.log('=-=-=-=-=-=-=-=-=');
    console.log(logData);
    debugger;
  }
}

window.X = new XPWA();


const dom = document.body.innerHTML;
document.body.innerHTML = 'This is xPWA';
setTimeout(() => {
  document.body.innerHTML = dom;
}, 100);



window.onload = (() => {
  window.X.DOM = new DOM();

  const style = ['padding: 0.3rem 1rem;',
    'background: black;',
    'font-family: sans-serif;',
    'text-shadow: 0 2px 10px orange;',
    'font: 2rem/3 Georgia;',
    'border-radius: 17px;',
    'color: white;'].join('');
  
  console.log('%c%s', style, 'xPWA', 'v0.8.74');
})();

