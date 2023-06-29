export class ProgressBarXPWA extends HTMLElement
{
    constructor()
    {
        super();
        this.classList.add('rogressbar-XPWA');
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

    adoptedCallback()
    {

    }
}

customElements.define("progressbar-xpwa", ProgressBarXPWA);