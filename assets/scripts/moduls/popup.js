/*================================================*/
// Добавляет на панель новую локацию
/*================================================*/

function popup(elem, text)
{

  let modal = document.createElement("div");
  
  // Уничтажаем ранее открытый попап
  if(document.querySelector(".popup") != null)
  {
    document.querySelector(".popup").remove();
  }
  
  modal.classList.add('popup');
  modal.innerHTML = text;
  elem.appendChild(modal);
  elem.style.position = "relative";
  elem.setAttribute("onclick", 'if(document.querySelector(".popup") != null){document.querySelector(".popup").remove();};this.setAttribute("onclick", "popup(this, \''+text+'\')")');
}
/*================================================*/