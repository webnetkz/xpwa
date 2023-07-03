export class ShowerHidden
{
    constructor()
    {
        window.hidden = this.hidden;
    }

    show(element)
    {
        element.classList.add('showElement');
    }

    hidden(element)
    {
        element.classList.add('hiddenElement');

        setTimeout(() => {
            element.style.display = 'none';
        }, 290)
    }

    hiddenToRight(element)
    {
        element.classList.add('hiddenToRightElement');

        setTimeout(() => {
            element.style.display = 'none';
        }, 490)
    }
}