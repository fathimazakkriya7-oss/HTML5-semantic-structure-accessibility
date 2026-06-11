document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(event){

event.preventDefault();

document.getElementById("successMessage").textContent =
"Message sent successfully!";

form.reset();

});

}

});
