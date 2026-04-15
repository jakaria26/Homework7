const form = document.querySelector("form");
const submitter = document.querySelector("button[type='submit']");
const pwInput = document.querySelector("input[type='password']");
pwInput.addEventListener("keyup", passwordCheck);
async function passwordCheck(){
let pwMsg = document.querySelector("#pw-message");
let formDataVar = new FormData(form, submitter);
let userPassword = formDataVar.get("pw-name");
const sendPW = await fetch(password.php?password=${userPassword});
let checkResult = await sendPW.json();
 pwMsg.textContent = checkResult["message"];
}
