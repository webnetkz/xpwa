export class ProgressBarXPWA extends HTMLElement
{
    constructor()
    {
        super();
        this.setStyles();
    }
    
    static get observedAttributes()
    {
        return ['color', 'progress'];
    }

    setStyles()
    {
        this.style.cssText = `
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
            height: 5px;
            background: var(--main-theme-dark);
        `;
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