const passFields=document.querySelectorAll("[passwd-field]");passFields.forEach(s=>{s.addEventListener("focusout",s=>{""!=passFields[0].value&&""!=passFields[1].value?passFields[0].value!=passFields[1].value?passFields.forEach(s=>{s.style.cssText="border: 1px solid red;",s.parentNode.setAttribute("class","error")}):passFields.forEach(s=>{s.style.cssText="border: 1px solid green;",s.parentNode.setAttribute("class","")}):passFields.forEach(s=>{s.style.cssText="border: 1px solid #4d58f0;"})})});