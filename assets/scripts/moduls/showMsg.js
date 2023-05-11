/*================================================*/
// Инициализация
/*================================================*/

function initMsg()
{
  createStylesMsg();
  createMsg();
  closeMsg();
}

/*================================================*/
// Отображение ошибок
/*================================================*/

function showMsg(msg, green)
{
  let msgBlock = document.querySelector('.showMsg');
  msgBlock.classList.add('msgAnim');

  // Смена цвета если это успешное сообщение
  if(green == true)
  {
    msgBlock.style.background = "repeating-linear-gradient(45deg,#6BDF3A,#6BDF3A 10px,#6FCE46 10px,#6FCE46 20px)";
    msgBlock.style.color = "white";
  }

  msgBlock.style.display = 'block';
  msgBlock.innerHTML = msg;

  // Автоматическое скрытие
  setTimeout(() => {
    msgBlock.style.display = "none";
    msgBlock.style.background = "repeating-linear-gradient(45deg,#df543b,#df543b 10px,#e05c45 10px,#e05c45 20px)";
  }, 4500);

}

/*================================================*/
// Стили для отображения
/*================================================*/

function createStylesMsg()
{
  let msgStyles = document.createElement('style');
  msgStyles.innerText = `.showMsg {
    display: none;
    box-sizing: border-box;
    position: fixed;
    top: 10px;
    margin: 20px;
    padding: 15px 30px;
    border-radius: 4px;
    background: repeating-linear-gradient(45deg,#df543b,#df543b 10px,#e05c45 10px,#e05c45 20px);
    width: calc(100vw - 40px);
    font-weight: 600;
    color:#333;
    text-align: center;
    animation: showNewMsg 0.2s linear;
    z-index: 99999999999999999999999999999999999999999999999;
    box-shadow: 0 0 10px rgb(42, 39, 39);
  }
  @keyframes showNewMsg {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 1000px) {
    
  }`;
  document.head.appendChild(msgStyles);
}

/*================================================*/
// Зависимость для инициализации
/*================================================*/

function createMsg()
{
  let msgBlock = document.createElement('div');
  msgBlock.classList.add('showMsg');
  document.body.appendChild(msgBlock);
}

/*================================================*/
// Закрыть отображение
/*================================================*/

function closeMsg()
{
  let msgBlock = document.querySelector('.showMsg');
  msgBlock.addEventListener('click', () => {
    setTimeout(() => {
      msgBlock.style.display = "none";
    }, 300);
  });
}
