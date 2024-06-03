const feedbackForm = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';
const formData = JSON.parse(localStorage.getItem(localStorageKey)) || {};

emailInput.value = formData.email || '';
messageTextarea.value = formData.message || '';

feedbackForm.addEventListener('input', () => {
  const formData = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = {
    email: emailInput.value.trim(),
    message: messageTextarea.value.trim(),
  };
  if(event.target.elements.email.value.trim() && event.target.elements.message.value.trim() ) {
    // console.log(`email: ${event.target.elements.email.value.trim()}`);
    // console.log(`message: ${event.target.elements.message.value.trim()}`);
    console.log(formData);
    localStorage.removeItem(localStorageKey);
    feedbackForm.reset();
  } else {
    alert("Fill please all fields");
  }
  
})

