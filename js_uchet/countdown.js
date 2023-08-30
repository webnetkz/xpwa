function startCountdown(endDate, elementIds)
{
  const timer = setInterval(function()
  {
    const now = new Date().getTime();
    const distance = endDate - now;

    if(distance < 0)
    {
      clearInterval(timer);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateElement(elementIds.days, days);
    updateElement(elementIds.hours, hours);
    updateElement(elementIds.minutes, minutes);
    updateElement(elementIds.seconds, seconds);
  }, 1000);
}

function updateElement(id, newValue)
{
  const element = document.getElementById(id);
  if (element && element.textContent !== String(newValue))
  {
    element.textContent = newValue;
    element.classList.add('uchet-animated');

    setTimeout(function() {
      element.classList.remove('uchet-animated');
    }, 300);
  }
}

startCountdown(new Date('2023/09/15').getTime(), 
{
  days: 'days',
  hours: 'hours',
  minutes: 'minutes',
  seconds: 'seconds',
});