export class TabsXPWA extends HTMLElement
{
  constructor()
  {
    super();
    const shadow = this.attachShadow({mode: 'closed'});

    this.querySelector('tab-content').style.display = 'block';
    this.addAction();
  }

  addAction()
  {
    this.tabs = this.querySelectorAll('tab-xpwa');
    
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

customElements.define("tabs-xpwa", TabsXPWA);