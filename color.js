const colorButton = document.querySelector("#button-id");
colorButton.addEventListener("click", () => {
const fonstSelect = document.querySelector("#font-select").value;
document.querySelector("body").styles.SetProperty("font-family",fontSelect) ;
});
