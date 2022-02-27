
document.addEventListener("DOMContentLoaded", () => {
  const LoginForm = document.querySelector("#login");
  const createAccountForm = document.querySelector("#createAccount");


  document.querySelector("#linkCreateAccount").addEventListener(click, e => {
    e.preventDefault();
    LoginForm.classList.add("form--hidden");
    createAccountForm.classList.remove("form--hidden");
});


document.querySelector("#linkLogin").addEventListener("click", e => {
  e.preventDefault();
   LoginForm.classList.remove("form--hidden");
   createAccountForm.classList.add("form--hidden");
});  

});













/*// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/