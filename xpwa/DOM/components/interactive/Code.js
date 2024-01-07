export class CodeXPWA extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `<code>
      <pre>
        <copy-content-x>${this.innerHTML}</copy-content-x>
      </pre>
      </code>
      <copy-x></copy-x>
    `;
  }

}

customElements.define("code-x", CodeXPWA);
