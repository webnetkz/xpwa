export class CheckboxXPWA extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    setTimeout(() => {  
        const idElement = X.DOM.generateId();
        this.innerHTML += `
        <input class="checkbox-x checkbox-ios-x" id="${idElement}" type="checkbox"/>
        <label class="checkbox-btn-x" for="${idElement}"></label>`;
    });
  }
}

customElements.define("checkbox-x", CheckboxXPWA);