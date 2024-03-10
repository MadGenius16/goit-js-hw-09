import"./assets/modulepreload-polyfill-3cfb730f.js";const e=document.querySelector(".feedback-form"),o="feedback-form-state";e.elements.message.value=localStorage.getItem(o)??"";e.addEventListener("input",t=>{localStorage.setItem(o,t.target.value)});e.addEventListener("submit",t=>{t.preventDefault(),localStorage.removeItem(o),e.reset()});
//# sourceMappingURL=commonHelpers2.js.map
