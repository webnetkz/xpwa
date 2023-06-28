export class ProgressRoundPWA extends HTMLElement
{
    constructor()
    {
        super();
        this.innerHTML += `<span></span>`;
        this.classList.add('progressround-pwa');
    }
    
    static get observedAttributes()
    {
        return ['color'];
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        switch(name)
        {
            case 'color':
                this.style.background = newValue;
            break;
        }
    }
}

customElements.define("progressround-pwa", ProgressRoundPWA);