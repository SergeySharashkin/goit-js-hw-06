function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonEl = document.querySelector('.change-color');
const bodyEl = document.querySelector('body');
const spanEl = document.querySelector('.color')

buttonEl.addEventListener('click', () => {
 
  spanEl.textContent = getRandomHexColor(); 
  bodyEl.style.backgroundColor = spanEl.textContent;
});
console.log(spanEl)