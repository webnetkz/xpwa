export class StepProcessingXPWA extends HTMLElement
{
    constructor()
    {
        super();

        this.innerHTML = `
        <div class="line">
            <div class="indecator-line"></div>
        </div>
        `;
    }

    createStepIndicator(numSteps)
    {
        const line = this.querySelector('.line');

        const stepWidth = 100 / (numSteps - 1);

        for(let i = 0; i < numSteps; i++)
        {
            const step = document.createElement('div');
            step.classList.add('step');
            step.style.left = `${stepWidth * i}%`;
            this.appendChild(step);
        }

        line.style.width = `${stepWidth * (numSteps - 1)}%`;
    }

    updateStepIndicator(currentStep)
    {
        const steps = document.querySelectorAll('.step');
        const indicatorLine = document.querySelector('.indicator-line');
        const stepWidth = 100 / (steps.length - 1);

        steps.forEach((step, index) => {
            if (index < currentStep) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });

        indicatorLine.style.width = `${stepWidth * currentStep}%`;
    }
    
    static get observedAttributes()
    {
        return ['steps', 'progress'];
    }

    attributeChangedCallback(name, oldValue, newValue)
    {
        switch(name)
        {
            case 'steps':
                this.createStepIndicator(newValue);
            break;
            case 'progress':
                this.updateStepIndicator(newValue);
            break;
        }
    }
}

customElements.define("step-processing-x", StepProcessingXPWA);