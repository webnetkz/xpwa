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
    

<?php require_once './footer.php'; ?>
