export class ModalXPWA extends HTMLElement {
  constructor() {
    super();
  }
  
  connectedCallback() {
    this.modalTitle = '';
    this.classList.add('showElement');
    this.rendering();
    this.closeModal();
  }

  rendering() {
    const tmp = this.innerHTML;
    this.innerHTML = `
    <div class="modal-x">
      <div class="modal-title-x">
        <h2>${this.modalTitle}</h2>
        <span>&times;</span>
      </div>
      <div class="modal-content-x">
        ${tmp}
      </div>
    </div>`;
  }

  closeModal() {
    this.querySelector('.modal-title-x span').addEventListener('click', () => {
      this.classList.add('hiddenElement');
      setTimeout(() => {
        this.remove();
      }, 200);

    });
  }

  static get observedAttributes() {
    return ['title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'title':
        this.querySelector('h2').innerHTML = newValue;
        break;
    }
  }
}

customElements.define("modal-x", ModalXPWA);
