export class PreloaderXPWA extends HTMLElement {
    constructor() {
        super();
        this.createRound();
        this.closePreloader();
    }

    createRound() {
        this.innerHTML = `
            <span><i></i><i></i><i></i></span>
        `;
    }

    closePreloader() {
        if(!this.getAttribute('timer')) {
            setTimeout(() => {
                this.remove();
            }, 1000);
        } else {
            setTimeout(() => {
                this.remove();
            }, Number(this.getAttribute('timer')) * 1000);
        }
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