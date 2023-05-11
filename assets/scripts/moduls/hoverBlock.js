/*================================================*/
  /*
    Эффект смещения при
    наведении мышы по краям блока
  */
/*================================================*/

const cards = document.querySelectorAll('.card');

for(let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', sRotate);
}

function rotate(event) {
    const cardItem = this.querySelector('.cardItem');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;

    cardItem.style.transform = 'rotateX('+ -(event.offsetY - halfHeight) / 5 +'deg)' +
    'rotateY('+ (event.offsetX - halfWidth) / 5 +'deg)';
}

function sRotate(event) {
    const cardItem = this.querySelector('.cardItem');
    cardItem.style.transform = 'rotate(0)';
}

let styles = document.createElement("style");
styles.innerHTML = `
.card {
  perspective: 1000px;
  transform-style: preserve-3d;
}

.cardItem {
  background-color: white;
  height: 450px;
  width: 250px;
  transition-duration: 200ms;
}`;
document.head.appendChild(styles);