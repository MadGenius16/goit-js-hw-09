const feedbackForm = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';
const savedData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

emailInput.value = savedData.email || '';
messageTextarea.value = savedData.message || '';

feedbackForm.addEventListener('input', () => {
  const dataSave = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(dataSave));
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  if(event.target.elements.email.value && event.target.elements.message.value ) {
    console.log(`email: ${event.target.elements.email.value}`);
    console.log(`message: ${event.target.elements.message.value}`);
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
  } else {
    alert("Fill please all fields");
  }
  
})