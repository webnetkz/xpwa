<?php require_once './header.php'; ?>
<?php require_once './nav.php'; ?>


<style>
    promo-x {
        height: 80vh;
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    promo-x h1 {
        color: var(--main-theme);
        font-size: 3rem;
    }
    promo-x h2 {
        font-size: 2rem;
    }
    promo-x::before {
        content: "";
        position: absolute;
        width: 70%;
        height: 70%;
        border: 1px solid var(--main-theme);
        opacity: 0.2;
        transform: scaleX(0.5) rotate(3deg);
        animation: showPromoBlocks 5.2s infinite;
        z-index: -1;
    }
    promo-x::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        border: 1px solid var(--main-theme);
        opacity: 0.2;
        transform: scaleX(0.6) rotate(7deg);
        animation: showPromoBlocks 7.2s infinite;
        z-index: -1;
    }
    @keyframes showPromoBlocks {
        50% {
            transform: scaleX(0.9) rotate(0deg);
            border-radius: 200px;
        }
    }
    card-x {
        background: var(--main-theme);
        border-radius: var(--radius);
        min-height: 200px;
        width: 96vw;
        margin-top: 20px;
        padding: 5px 15px;
        color: var(--white);
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }
    card-x card-x {
        display: inline-block;
        width: 20%;
        height: 180px;
        margin: 10px;
        border-radius: var(--radius);
        background: rgba(255, 255, 255, 0.3); 
        padding-top: 2rem;
    }
    card-x h2 {
        color: var(--white);
        font-size: 2.3rem;
    }
    card-x card-x h2 {
        font-size: 2rem;
    }
    card-x card-x h2 span {
        font-size: 2.9rem;
        color: var(--main-theme-dark);
        position: absolute;
        top: -1rem;
        right: 2rem;
        text-shadow: 0 0 1px white;
    }
</style>

<promo-x>
    <h1>
        <logo-x src="/logo.png"></logo-x>
        xPWA
    </h1>
    <h2>Прогрессивное построение интерфейсов</h2>
    <hr>
    <div>
        <button-x link="/pages/quick-start.php">Быстрый старт</button-x>
        <button-x link="/pages/documention.php">Документация</button-x>
    </div>
</promo-x>

<card-x>
    <h2>Почему xPWA?</h2>
    <card-x>
        <h2><span>01</span> Быстрый старт</h2>
        <hr>
        Очень простой и минималистичный синтаксис
    </card-x>
    <card-x>
        <h2><span>02</span> Простота</h2>
        <hr>
        Все элементы интерфейса уже созданы
    </card-x>
    <card-x>
        <h2><span>03</span> Свободность / открытость</h2>
        <hr>
        Открытые исходные коды, поддержка
    </card-x>
</card-x>
    

<?php require_once './footer.php'; ?>
