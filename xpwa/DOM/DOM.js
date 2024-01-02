// import '../styles/xpwa.css';
import './Mobile.js';

import './components/core/core_components.js';
import './components/navigation/navigation_components.js';
import './components/decorative/decorative_components.js';
import './components/interactive/interactive_components.js';
import './components/layouts/layouts_components.js';
import './components/messages/messages_components.js';
import './components/progress/progress_components.js';
import './components/sliders/sliders_componetns.js';


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