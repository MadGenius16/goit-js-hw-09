import"./assets/modulepreload-polyfill-3cfb730f.js";const t=document.querySelector(".feedback-form"),l=document.querySelector("input"),s=document.querySelector("textarea"),a="feedback-form-state",m=JSON.parse(localStorage.getItem(a))||{};l.value=m.email||"";s.value=m.message||"";t.addEventListener("input",()=>{const e={email:l.value,message:s.value};localStorage.setItem(a,JSON.stringify(e))});t.addEventListener("submit",e=>{e.preventDefault(),e.target.elements.email.value.trim()&&e.target.elements.message.value.trim()?(console.log(`email: ${e.target.elements.email.value.trim()}`),console.log(`message: ${e.target.elements.message.value.trim()}`),localStorage.removeItem(a),t.reset()):alert("Fill please all fields")});
//# sourceMappingURL=commonHelpers2.js.map