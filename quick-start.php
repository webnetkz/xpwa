<?php require_once './header.php'; ?>
<?php require_once './nav.php'; ?>

<content-x>
<h1>Checkbox</h1>
<block-x>
    <checkbox-x></checkbox-x>
</block-x>
<code-x>
    &lt;<t-x>checkbox-x</t-x>&gt;&lt;<t-x>/checkbox-x</t-x>&gt;
</code-x>
<hr>
<h2>checked</h2>
<p>Активный переключатель</p>
<block-x>
    <checkbox-x checked></checkbox-x>
</block-x>
<code-x>
    &lt;<t-x>checkbox-x</t-x> <a-x>checked</a-x>&gt;&lt;<t-x>/checkbox-x</t-x>&gt;
</code-x>
<hr>
<h2>name</h2>
<code-x>
    &lt;<t-x>checkbox-x</t-x> <a-x>name="<v-x>checkbox</v-x>"</a-x>&gt;&lt;<t-x>/checkbox-x</t-x>&gt;
</code-x>
<hr>
<h2>small</h2>
<p>Уменьшает переключатель</p>
<block-x>
    <checkbox-x small></checkbox-x>
</block-x>
<code-x>
    &lt;<t-x>checkbox-x</t-x> <a-x>small</a-x>&gt;&lt;<t-x>/checkbox-x</t-x>&gt;
</code-x>
<hr>
<h2>large</h2>
<p>Уменьшает переключатель</p>
<block-x>
    <checkbox-x large></checkbox-x>
</block-x>
<code-x>
    &lt;<t-x>checkbox-x</t-x> <a-x>large</a-x>&gt;&lt;<t-x>/checkbox-x</t-x>&gt;
</code-x>


</content-x>

<?php require_once './footer.php'; ?>