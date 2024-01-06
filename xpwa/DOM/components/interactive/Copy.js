export class CopyXPWA extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.innerHTML = `<svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-8feus5" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="ContentCopyRoundedIcon"><path d="M15 20H5V7c0-.55-.45-1-1-1s-1 .45-1 1v13c0 1.1.9 2 2 2h10c.55 0 1-.45 1-1s-.45-1-1-1zm5-4V4c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h9c1.1 0 2-.9 2-2zm-2 0H9V4h9v12z"></path></svg>`;
  
    this.addEventListener('click', this.copy);
  }

  copy() {
    const copyContent = this.parentElement.querySelector('copy-content-x');  
    console.log(copyContent);
  }

}

customElements.define("copy-x", CopyXPWA);
