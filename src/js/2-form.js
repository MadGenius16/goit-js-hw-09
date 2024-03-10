const feedbackForm = document.querySelector('.feedback-form');

const emailInput = feedbackForm.querySelector('input');
const messageTextarea = feedbackForm.querySelector('textarea');

const savedData = JSON.parse(localStorage.getItem('feedback-form-state')) || {};

emailInput.value = savedData.email || '';
messageTextarea.value = savedData.message || '';

feedbackForm.addEventListener('input', () => {
  const dataSave = {
    email: emailInput.value,
    message: messageTextarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(dataSave));
});

feedbackForm.addEventListener('submit', (event) => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log('Збережено :', dataToSave);
});