const formData = { 
    email: "", 
    message: "" 
};

const form = document.querySelector(".feedback-form");
const emailInput = form.elements.email;
const messageInput = form.elements.message;

const STORAGE_KEY = "feedback-form-state";

form.addEventListener("input", onTextareaInput);
form.addEventListener("submit", onSubmitInput);


function onTextareaInput(event) {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateForm() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email || "";
    messageInput.value = parsedData.message || "";
    formData.email = parsedData.email || "";
    formData.message = parsedData.message || "";
  }
}

populateForm();

function onSubmitInput(event) {
  event.preventDefault();

  
  if (!formData.email || !formData.message) {
    alert ("Fill please all fields");
    return;
  }

  console.log(formData);

 
  localStorage.removeItem(STORAGE_KEY);
  formData.email = "";
  formData.message = "";
  form.reset();
}
