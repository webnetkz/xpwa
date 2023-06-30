export class ProgressBarXPWA extends HTMLElement
{
    constructor()
    {
        super();
    }
    
    static get observedAttributes()
    {
        return ['color', 'progress'];
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        switch(name)
        {
            case 'color':
                this.style.background = newValue;
            break;
            case 'progress':
                if(newValue >= 100)
                {
                    this.remove();
                }
                this.style.width = newValue+'vw';
            break;
        }
    }
}

customElements.define("progress-bar-xpwa", ProgressBarXPWA);