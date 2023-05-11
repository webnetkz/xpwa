'use stict';

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    QJS это простая библиотека вдохновленная jQuery
    V0.01 - 24.11.21
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

const D = document;
const W = window;

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    get == querySelector
    getAll == querySelectorAll
    debug == console.log
    debugWarn == console.warn
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function get(selectorElement, parentElement) {
    if(!parentElement) {
        parentElement = document;
    }
    return parentElement.querySelector(selectorElement);
}

function getAll(selectorElements, parentElement) {
    if(!parentElement) {
        parentElement = document;
    }
    return parentElement.querySelectorAll(selectorElements);
}

function debug(data) {
    console.log(data);
}

function debugWarn(data) {
    console.warn(data);
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    setAttribute
    removeAttribute
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function setAttribute(selectorElement, atribute, value) {
    document.querySelector(selectorElement).setAttribute(atribute, value);
}

function removeAttribute(selectorElement, atribute) {
    document.querySelector(selectorElement).removeAttribute(atribute);
}

/*=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    href == location.href
=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

function href(url) {
    window.location.href = url;
}
