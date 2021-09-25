function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// /ищу кнопки
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
// Ищу инпут
const inputEl = document.querySelector("#controls input");
// контейнер для боксов и стили для него
const boxesEl = document.querySelector("#boxes");
boxesEl.style.display = "flex";
boxesEl.style.alignItems = "center";
// достаю из инпута нужное количество боксов
let amount=0;

inputEl.addEventListener("input", addNumber);
function addNumber(event) {
  // console.log(event.currentTarget.value)
 amount = event.currentTarget.value
return amount
 
}
// console.log(number);
// let amount = number;
buttonCreate.addEventListener("click", createBoxes);

function createBoxes() {
  console.log(amount)
  let newBoxes = [];
  for (let i = 0; i < amount; i += 1) {
    
    const newBox = document.createElement("div");
    const sizeBox = 30 + i * 10;
    newBox.style.width = `${sizeBox}px`;
    newBox.style.height = `${sizeBox}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.margin = "10px";
    // console.log(newBox);
    newBoxes.push(newBox);

  }

  boxesEl.append(...newBoxes);
}
