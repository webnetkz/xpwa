export class UchetModal extends HTMLElement
{
  constructor()
  {
    super();
    this.classList.add('showElement');
    this.rendering();
    this.closeModal();
  }

  rendering()
  {
    const tmp = this.innerHTML;
    this.innerHTML = `
    <div class="uchet-modal">
      <div class="modal-title">
        <h2></h2>
        <span>&times;</span>
      </div>
      <div class="modal-content">
        ${tmp}
      </div>
    </div>`;
  }

  closeModal()
  {
    this.querySelector('.modal-title span').addEventListener('click', () => {
      this.classList.add('hiddenElement');
      setTimeout(() => {
        this.remove();
      }, 200);
    });
  }

  static get observedAttributes() {
    return ['title', 'timer'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    switch(name)
    {
        case 'title':
          this.querySelector('.modal-title h2').innerHTML = newValue;
        break;
        case 'timer':
          setTimeout(() => {
            this.classList.add('hiddenElement');
            setTimeout(() => {
              this.remove();
            }, 300);
          }, parseInt(newValue * 1000));
        break;
    } 
  }
}

customElements.define("uchet-modal", UchetModal);
