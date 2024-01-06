<?php require_once './header.php'; ?>
<?php require_once './nav.php'; ?>

<content-x>
    
<h1>Button</h1>
<block-x>
    <button-x>Button</button-x>
</block-x>
<warning-x>
    Меняет стили если находится в компоненте <b>menu-x</b>
</warning-x>
<hr>
<code-x>
    &lt;<t-x>button-x</t-x>&gt;Button&lt;<t-x>/button-x</t-x>&gt;
</code-x>
<h2>name</h2>
<p>Для использования в form</p>
<hr>
<code-x>
    &lt;<t-x>button-x</t-x> <a-x>name="<v-x>button</v-x>"</a-x>&gt;Button&lt;<t-x>/button-x</t-x>&gt;
</code-x>
<h2>link</h2>
<p>Указывается ссылка для редиректа</p>
<block-x>
    <button-x link="https://google.com">Google</button-x>
</block-x>
<warning-x>
    Делает активным элемент меню если текущий URI соответствует значению
</warning-x>
<hr>
<code-x>
    &lt;<t-x>button-x</t-x> <a-x>link="<v-x>https://google.com</v-x>"</a-x>&gt;Google&lt;<t-x>/button-x</t-x>&gt;
</code-x>

</content-x>

<?php require_once './footer.php'; ?>