/*
    Slider
    v1.1
*/
// Easy slider

function nextSlide() {
    let nowSlide = document.querySelector("#sliderContent").getAttribute("slide");
    nowSlide = Number(nowSlide) + 1;
    if(nowSlide == 5) {
        nowSlide = 1;
    }
    getSliderContent(nowSlide);
}
function backSlide() {
    let nowSlide = document.querySelector("#sliderContent").getAttribute("slide");
    nowSlide = nowSlide - 1;
    if(nowSlide == 0) {
        nowSlide = 4;
    }
    getSliderContent(nowSlide);
}
function getSliderContent(slide) {
    let sliderContainer = document.querySelector("#sliderContent");
    let sledirContent1 = `<h1>Калькулятор путешествий</h1>
    <div class="pagination">
        <div class="pag pagX hoverBtn" id="slede1" onclick="getSliderContent(1);"></div>
        <div class="pag hoverBtn" id="slede2" onclick="getSliderContent(2);"></div>
        <div class="pag hoverBtn" id="slede3" onclick="getSliderContent(3);"></div>
        <div class="pag hoverBtn" id="slede4" onclick="getSliderContent(4);"></div>
    </div>`;
    let sledirContent2 = `<h1>Калькулятор путешествий 2</h1>
    <div class="pagination">
        <div class="pag hoverBtn" id="slede1" onclick="getSliderContent(1);"></div>
        <div class="pag pagX hoverBtn" id="slede2" onclick="getSliderContent(2);"></div>
        <div class="pag hoverBtn" id="slede3" onclick="getSliderContent(3);"></div>
        <div class="pag hoverBtn" id="slede4" onclick="getSliderContent(4);"></div>
    </div>`;
    let sledirContent3 = `<h1>Калькулятор путешествий 3</h1>
    <div class="pagination">
        <div class="pag hoverBtn" id="slede1" onclick="getSliderContent(1);"></div>
        <div class="pag hoverBtn" id="slede2" onclick="getSliderContent(2);"></div>
        <div class="pag pagX hoverBtn" id="slede3" onclick="getSliderContent(3);"></div>
        <div class="pag hoverBtn" id="slede4" onclick="getSliderContent(4);"></div>
    </div>`;
    let sledirContent4 = `<h1>Калькулятор путешествий 4</h1>
    <div class="pagination">
        <div class="pag hoverBtn" id="slede1" onclick="getSliderContent(1);"></div>
        <div class="pag hoverBtn" id="slede2" onclick="getSliderContent(2);"></div>
        <div class="pag hoverBtn" id="slede3" onclick="getSliderContent(3);"></div>
        <div class="pag pagX hoverBtn" id="slede4" onclick="getSliderContent(4);"></div>
    </div>`;
    switch(slide) {
        case 1:
            sliderContainer.innerHTML = sledirContent1;
            sliderContainer.setAttribute('slide', 1);
        break;
        case 2:
            sliderContainer.innerHTML = sledirContent2;
            sliderContainer.setAttribute('slide', 2);
        break;
        case 3:
            sliderContainer.innerHTML = sledirContent3;
            sliderContainer.setAttribute('slide', 3);
        break;
        case 4:
            sliderContainer.innerHTML = sledirContent4;
            sliderContainer.setAttribute('slide', 4);
        break;
    }
}
