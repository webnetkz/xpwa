window.addEventListener('beforeunload', function (event) {
    if(document.querySelector('#finish_test')) {
        event.returnValue = 'Нажмите, завершить';
        return event.returnValue;
    }
    document.querySelector('#finish_test').style.backgorund = 'blue';
});