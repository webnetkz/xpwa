function modalStartTest()
{
    if(location.href === 'https://ypozdnyakov.devcomp.uchet.kz/site/pre_contest_first_step.php')
    {
        document.body.innerHTML += `<uchet-modal title="Принять условия" timer="10">
            Уважаемые коллеги и бухгалтеры, приглашаем вас взять участие в грандиозном конкурсе "Лучший бухгалтер 2023" от компании Uchet.kz! Это ваш шанс не только продемонстрировать свое мастерство и знания, но и завоевать признание профессионального сообщества.
            <br>
            <button class="uchet-button-small" onclick="location.href = 'contest_first_step.php';">Приступить</button>  
        </uchet-modal>`;
    }
    else
    {   
        document.body.innerHTML += `<uchet-modal title="Принять условия" timer="10">
            Уважаемые коллеги и бухгалтеры, приглашаем вас взять участие в грандиозном конкурсе "Лучший бухгалтер 2023" от компании Uchet.kz! Это ваш шанс не только продемонстрировать свое мастерство и знания, но и завоевать признание профессионального сообщества.
            <br>
            <button class="uchet-button-small" onclick="location.href = 'contest_second_step.php';">Приступить</button>  
        </uchet-modal>`;
    }
}