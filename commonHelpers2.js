import"./assets/styles-28ed7fc8.js";const e=document.querySelector(".feedback-form"),m=document.getElementsByName("email");m[0].placeholder="Type area";const s=JSON.parse(localStorage.getItem("feedback-form-state"))||{};e.email.value=s.email||"";e.message.value=s.message||"";e.addEventListener("input",t=>{const a={email:e.email.value.trim(),message:e.message.value.trim()};localStorage.setItem("feedback-form-state",JSON.stringify(a))});e.addEventListener("submit",t=>{t.preventDefault();const a=e.email.value.trim(),l=e.message.value.trim();a!==""&&l!==""?(console.log({email:a,message:l}),localStorage.clear(),e.reset()):alert("Please fill fields!")});
//# sourceMappingURL=commonHelpers2.js.map
