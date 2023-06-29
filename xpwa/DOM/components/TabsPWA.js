export class TabsPWA extends HTMLElement
{
  constructor() {
    super();
    this.querySelector('tab-content').style.display = 'block';
    this.addAction();
  }

  addAction()
  {
    this.tabs = this.querySelectorAll('tab-sigma');
    
    this.tabs.forEach((element) => {
      element.classList.add('button');
      element.style.marginRight = '5px';

      element.addEventListener('click', () => {
        let allTabsContent = element.parentNode.querySelectorAll('tab-content');
        let buttonActive = element.parentNode.querySelector('.buttonActive');
        buttonActive.classList.remove('buttonActive');
        element.classList.add('buttonActive');

        allTabsContent.forEach((tabContent) => {
          tabContent.classList.add('showElement');
          tabContent.style.display = 'none';
        });
        
        element.nextSibling.nextSibling.style.display = 'block';
      });
    });
  }

  static get observedAttributes()
  {
    return [''];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
  }
}

customElements.define("tabs-pwa", TabsPWA);