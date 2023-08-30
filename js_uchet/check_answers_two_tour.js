let answerButtonsTwoTour = document.querySelectorAll('.uchet-answer-block-two-tour button');

answerButtonsTwoTour.forEach((button) => {
button.addEventListener('click', () => {
    const parrentBlock = button.parentNode;
    const input = parrentBlock.querySelector('input');

    if(input.value.trim() === '') {
    input.placeholder = 'Введите ответ';
    input.focus();
    return;
    }

    switch(button.getAttribute('answer')) {
    case 'answer':
        input.removeAttribute('disabled');
        button.removeAttribute('answer');
        button.innerText = 'Сохранить';
        input.focus();
    break;
    default:
        input.setAttribute('disabled', 'disabled');
        button.innerText = 'Отменить';
        button.setAttribute('answer', 'answer');
    break;
    }
});
});