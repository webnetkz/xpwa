export function stopTest()
{
  if(document.querySelector('.uchet-simple-test-container'))
  {
    showModal('.uchet-modal-container_3');
    document.querySelector('.uchet-simple-test-container').innerHTML = `
      <div class="uchet-statistics">
        <div class="uchet-total-questions">Общее количество вопросов: <span id="uchet-total-questions">333</span></div>
        <div class="uchet-correct-answers">Правильные ответы: <span id="uchet-correct-answers">333</span></div>
        <div class="uchet-incorrect-answers">Неправильные ответы: <span id="uchet-incorrect-answers">0</span></div>
        <div class="uchet-time-answers">Затраченное время: <span id="uchet-time-answers">12:01</span></div>
      </div>
    `;
  }
}

function stopTestTwoTour(elem)
  {
    if(document.querySelector('.uchet-container'))
    {
      if(elem.innerText === 'Завершить тест')
      {
        elem.innerText = 'Подтвердите!';
        return;
      }
      
      document.querySelector('#finish').remove();

      document.querySelector('.uchet-container').innerHTML = `
        <div class="uchet-statistics">
          <div class="uchet-total-questions">Общее количество вопросов: <span id="uchet-total-questions">333</span></div>
          <div class="uchet-correct-answers">Правильные ответы: <span id="uchet-correct-answers">333</span></div>
          <div class="uchet-incorrect-answers">Неправильные ответы: <span id="uchet-incorrect-answers">0</span></div>
          <div class="uchet-time-answers">Затраченное время: <span id="uchet-time-answers">12:01</span></div>
        </div>
      `;
    }
  }