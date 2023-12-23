export class CheckboxXPWA extends HTMLElement {
  constructor() {
    super();

    const idElement = window.generateId();

    this.innerHTML += `
    <input class="checkbox-x checkbox-ios-x" id="${idElement}" type="checkbox"/>
    <label class="checkbox-btn-x" for="${idElement}"></label>`;

    this.querySelector('label').addEventListener('click', this.generateId);
  }

  static get observedAttributes() {
      return ['name'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch(name) {
      case 'name':
        this.querySelector('input').name = newValue;
      break;
    }
  }
}

window.generateId = function generateId() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomCode = '';

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomCode += characters.charAt(randomIndex);
  }

  return randomCode;
};

customElements.define("checkbox-x", CheckboxXPWA);