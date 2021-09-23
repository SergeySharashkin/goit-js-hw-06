const inputEl = document.querySelector("#validation-input");
inputEl.classList.add('#validation-input')
inputEl.addEventListener('blur', addClass)
const stylesEl = document.querySelector('style')

console.log(stylesEl)
function addClass() {
    
    if (inputEl.value.length == inputEl.dataset.length) {
    inputEl.classList = '#validation-input.valid'
     }
    else{inputEl.classList = '#validation-input.invalid'
    }
    return 
}
console.log(inputEl)