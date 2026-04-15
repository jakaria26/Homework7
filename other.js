const elRadio = document.querySelector("input[id='js-topic-eventlisteners']");
const jqRadio = document.querySelector("input[id='js-topic-jquery']");
const fRadio = document.querySelector("input[id='js-topic-fetch']");
const otherRadio = document.querySelector("input[id='js-topic-other']");
let clickstatus = 0;

otherRadio.addEventListener("click", () => {
    checkRadio("other");
});
elRadio.addEventListener("click", () => {
checkRadio("existing");
});
jqRadio.addEventListener("click", () => {
checkRadio("existing");
});
fRadio.addEventListener("click", () => {
checkRadio("existing");
});

async function checkRadio(currentRadio){
const sendRadio = await fetch(other.php?radio=${currentRadio});
let result = await sendRadio.json();
if (result["addDelete"] == "add"){
addTextBox();
    } else {
deleteTextBox();
    }
}

function addTextBox(){
if (clickstatus == 0){
const tbInput = document.createElement("input");
tbInput.setAttribute("name", "js-topic");
tbInput.setAttribute("type", "text");
tbInput.setAttribute("id", "js-topic-other-tb");
const currentElement = document.querySelector("label[id='other-label']");
currentElement.after(tbInput);
clickstatus++;
    }
}

function deleteTextBox(){
if (clickstatus > 0){
clickstatus = 0;
const tbInput = document.querySelector("#js-topic-other-tb");
        tbInput.remove();
    }
}
