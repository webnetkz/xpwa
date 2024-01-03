// import '../styles/xpwa.css';
import './Mobile.js';

import './components/core/core.js';
import './components/navigations/navigations.js';
import './components/decorative/decorative.js';
import './components/interactive/interactive.js';
import './components/layouts/layouts.js';
import './components/messages/messages.js';
import './components/progress/progress.js';
import './components/sliders/sliders.js';


export class DOM {
    constructor() {
    }

    generateId() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let randomCode = '';
    
        for(let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          randomCode += characters.charAt(randomIndex);
        }
        
        return randomCode;
    }
}