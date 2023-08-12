import { DOM } from './xpwa/DOM/DOM.js';

export class XPWA
{

}

window.onload = (() => {
    window.DOM = new DOM();

    fetch('/xpwa.json')
        .then(response => response.json())
        .then((data) => {
            data = JSON.stringify(data);
            localStorage.setItem('xpwa-menu', data);
        })
        .catch(error => console.log('Ошибка:', error));

})();


const style = ['padding: 0.3rem 1rem;',
  'background: black;',
  'font-family: sans-serif;',
  'text-shadow: 0 2px 10px orange;',
  'font: 2rem/3 Georgia;',
  'border-radius: 17px;',
  'color: white;'].join('');

console.log('%c%s', style, 'xPWA');