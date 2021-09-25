const formEL = document.querySelector(".login-form");
formEL.addEventListener("submit", onFormSubtit);
function onFormSubtit(event) {
  event.preventDefault();
 const formElements = event.currentTarget.elements;
 const email = formElements.email.value;
 const password = formElements.password.value;
  const formData = {
        email,
        password
        
    }
 if (email!=='' && password!=='') {
   console.log(formData)
   formEL.reset();
 }
 else {alert('заполни поля, не надо ля-ля')}
 
}
