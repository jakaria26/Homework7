const radioList = document.querySelectorAll('[type=radio]');
const body = document.querySelector("body");
const otherRadio = document.querySelector("#js-topic-other");

for (const radioButton of radioList) {
    radioButton.addEventListener("focus", () => {
        const color = radioButton.value;
        body.style.setProperty("background-color", color);
    });

    radioButton.addEventListener("blur", () => {
        body.style.setProperty("background-color", "white");
    });
