export class CloseXPWA extends HTMLElement
{
  constructor()
  {
    super();
    this.innerHTML = '+';

    this.animation = 'hide';
    this.addEventListener('click', this.hidden);
  }

  hidden(element)
  {
      element.classList.add('hiddenElement');

      setTimeout(() => {
          element.style.display = 'none';
          element.remove();
      }, 290)
  }

  static get observedAttributes()
  {
    return ['animation'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'animation':

        break;
    }
  }
}

customElements.define("close-xpwa", CloseXPWA);
