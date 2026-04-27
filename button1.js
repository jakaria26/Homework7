const countButton = document.querySelector("button[id='counting-button']");
let count = 0;

countButton.addEventListener("click", (event) => {
    count++;
    event.target.textContent = count;
});
