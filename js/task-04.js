let counterValue = 0;
const minus = document.querySelector('[data-action="decrement"]');
const plus = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

minus.addEventListener("click", () => {
 counterValue -= 1;
 valueEl.textContent = counterValue;
});
plus.addEventListener('click', () => {
counterValue += 1;
 valueEl.textContent = counterValue;
})


// console.log(minus);
// console.log(plus);
