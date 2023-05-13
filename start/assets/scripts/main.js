"use strict";

document.addEventListener('DOMContentLoaded', () => {


  // Отображает кнопку наверх
  if(window.pageYOffset || document.documentElement.scrollTop||document.body.scrollTop > 50)
  {
  }

  // Отключаем загрузку, когда страница полностью загружена
  setTimeout(() => {
    document.querySelector(".loaderContainer").style.display = "none";
  }, 300);
});


window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled > 100) {
    document.querySelector(".fixedBtnToTop").style.display = "block"; 
  } else {
    document.querySelector(".fixedBtnToTop").style.display = "none"; 
  }
}