export class ProgressRoundXPWA extends HTMLElement
{
    constructor()
    {
        super();
        this.innerHTML += `<span></span>`;

        this.setStyles();

    }
    
    static get observedAttributes()
    {
        return ['color'];
    }

    setStyles()
    {
        this.style.cssText = `
            position: relative;
            z-index: 999;
            position: fixed;
            top: calc(50vh - 50px);
            left: calc(50vw - 50px);
            width: 100px;
            height: 100px;
            border: 2px solid var(--main-theme);
            border-radius: 100px;
            animation: progressround 2s infinite;
            box-shadow: 0 0 20px rgba(101, 141, 255, 0.1);
        `;

        this.querySelector('span').style.cssText = `
            box-sizing: border-box;
            display: block;
            min-width: 10px;
            min-height: 10px;
            width: 10px;
            height: 10px;
            position: absolute;
            z-index: 99;
            border: 1px solid var(--main-theme);
            border-radius: 10px;
            left: -15px;
            top: 44px;
            animation: progressroundSputnik 3s infinite;
        `;
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