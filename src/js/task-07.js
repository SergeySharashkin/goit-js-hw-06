const controlEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

controlEl.addEventListener('input', () => {
console.log(controlEl.value);
return textEl.style.fontSize = controlEl.value
}) 
