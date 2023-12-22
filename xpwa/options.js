function getOptions() {
    let options = JSON.parse(document.querySelector('options-x').innerText);

    if(options?.coreUi) {
        if(options?.coreUi?.theme) {
            window.THEME = options?.coreUi?.theme;
        }
        if(options?.coreUi?.padding) {
            setOptionsVariable('--padding', options?.coreUi?.padding);
        }
        if(options?.coreUi?.margin) {
            setOptionsVariable('--margin', options?.coreUi?.margin);
        }
        if(options?.coreUi?.radius) {
            setOptionsVariable('--radius', options?.coreUi?.radius);
        }
        if(options?.coreUi?.shadow) {
            setOptionsVariable('--shadow', options?.coreUi?.shadow);
        }
        if(options?.coreUi?.widthScrollBar) {
            setOptionsVariable('--widthScrollBar', options?.coreUi?.widthScrollBar);
        }
    }

    if(options?.colors) {
        if(options?.colors?.main_theme) {
            setOptionsVariable('--mainTheme', options?.colors?.mainTheme);
        }
        if(options?.colors?.mainThemeLight) {
            setOptionsVariable('--mainThemeLight', options?.colors?.mainThemeLight);
        }
        if(options?.colors?.mainThemeDark) {
            setOptionsVariable('--mainThemeDark', options?.colors?.mainThemeDark);
        }
    }
}

function setOptionsVariable(variable, value) {
    document.documentElement.style.setProperty(variable, value);
}

getOptions();