function controlMenu(button)
{
    const menu = document.querySelector('.uchet-main-menu');


    if(menu.classList.contains('uchet-main-menu-close'))
    {
        menu.classList.remove('uchet-main-menu-close');
        menu.classList.add('uchet-main-menu-open');

        button.classList.remove('fa-bars');
        button.classList.add('fa-xmark');
    }
    else
    {
        menu.classList.remove('uchet-main-menu-open');
        menu.classList.add('uchet-main-menu-close');

        button.classList.remove('fa-xmark');
        button.classList.add('fa-bars');
    }
}