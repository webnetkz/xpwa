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
}