/*
  Модуль отображения элементов попавших в отображаемую область
  // При прокрутки страницы
  v1.1
*/

// Отображение элемента
export function showVisible(classElem) {
  for (let elem of document.querySelectorAll(classElem)) {
    if (isVisible(elem)) {
      	elem.style.display = 'block';
    } else {
        elem.style.display = 'none';
    }
  }
}

// Проверяем попал ли элемент в отображаемую область
function isVisible(elem) {
  let coords = elem.getBoundingClientRect();
  let windowHeight = document.documentElement.clientHeight;
  // верхний край элемента виден
  let topVisible = coords.top > 0 && coords.top < windowHeight;
  // нижний край элемента виден
  let bottomVisible = coords.bottom < windowHeight && coords.bottom > 0;

  return true;
  //return topVisible || bottomVisible;
}
