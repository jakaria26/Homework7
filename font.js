const fontButton = document.querySelector("#font-button");
fontButton.addEventListener("click", () => {
const fontSelect = document.querySelector("#font-select").value;
document.querySelector("body").styles.setProperty("font-family,fontSelect);
});
