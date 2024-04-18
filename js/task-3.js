const inputEl = document.querySelector("#name-input");
// console.log(inputEl);
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", InputFun);

function InputFun(e) {
const value = e.currentTarget.value;
const name = value.trim();
if (name === '') {
spanEl.textContent = 'Anonymous';
return;
}
spanEl.textContent = name;

}