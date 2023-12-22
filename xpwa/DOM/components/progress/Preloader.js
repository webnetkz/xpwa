export class PreloaderXPWA extends HTMLElement {
    constructor() {
        super();
        this.createRound();
    }

    createRound() {
        this.innerHTML = `
            <span><i></i><i></i><i></i></span>
        `;
    }
    
    static get observedAttributes() {
        return ['color'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        switch(name) {
            case 'color':
                this.style.background = newValue;
            break;
        }
    }
}

customElements.define("preloader-x", PreloaderXPWA);