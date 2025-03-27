document.addEventListener("DOMContentLoaded",function(){fetch("./includes/footer.html").then(e=>e.text()).then(e=>{document.querySelector(".footer-container").innerHTML=e})});
