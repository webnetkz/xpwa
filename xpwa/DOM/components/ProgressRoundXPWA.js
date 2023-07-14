export class ProgressRoundXPWA extends HTMLElement
{
    constructor()
    {
        super();
        this.innerHTML += `<span></span>`;
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
                this.style.border = newValue;
            break;
        }
    }
}

customElements.define("progress-round-xpwa", ProgressRoundXPWA);