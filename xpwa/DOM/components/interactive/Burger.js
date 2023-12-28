export class BurgerXPWA extends HTMLElement {
  constructor() {
    super();
    
    this.createLines();
    if(window.MOBILE.isMobile()) {
      this.closeMenu();
    }
    this.addEventListener('click', this.changeBurger);
  }
  
  createLines() {
    if(!this.querySelector('span')) {
      this.innerHTML = `<span></span><span></span><span></span>`;
    } return;
  }

  openMenu() {
    const childElements = this.parentNode.querySelectorAll('button-x');
    childElements.forEach((el) => {
        el.style.display = 'block';
    });

    document.querySelector('header-x').style.height = '--height-header';
  }

  closeMenu() {
    const childElements = this.parentNode.querySelectorAll('button-x');
    childElements.forEach((el) => {
        el.style.display = 'none';
    });
  }

  changeBurger() {
    const linesOfBurger = this.querySelectorAll('span');

    if(this.getAttribute('status') != 'close') {
        this.openMenu();
        linesOfBurger[0].style.transform = 'rotate(45deg)';
        linesOfBurger[0].style.marginTop = '13px';
        linesOfBurger[1].style.opacity = '0';
        linesOfBurger[2].style.transform = 'rotate(-45deg)';
        linesOfBurger[2].style.marginTop = '-14px';
    
        this.setAttribute('status', 'close');
    } else {
        this.closeMenu();
        linesOfBurger[0].style.transform = 'rotate(0deg)';
        linesOfBurger[0].style.marginTop = '0';
        linesOfBurger[1].style.opacity = '1';
        linesOfBurger[2].style.transform = 'rotate(0)';
        linesOfBurger[2].style.marginTop = '0';
        this.setAttribute('status', 'open');
    }
  }
}

customElements.define("burger-x", BurgerXPWA);
