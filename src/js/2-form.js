const feedbackForm = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const localStorageKey = 'feedback-form-state';
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
  localStorage.removeItem('localStorageKey');
  feedbackForm.reset();
});