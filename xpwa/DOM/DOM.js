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
        this.setStyles();
    }


    setStyles() {
        const linkStyles = document.createElement("link");
        const linkFont = document.createElement("link");

        linkStyles.rel = linkFont.rel = "stylesheet";
        linkStyles.type = linkFont.type = 'text/css';

        linkStyles.href = "./xpwa/styles/xpwa.css";
        linkFont.href = 'https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap';

        if(navigator.onLine) {
            document.head.appendChild(linkFont);
        } else {
          console.log('OFFLINE');
        }

        document.head.appendChild(linkStyles);
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