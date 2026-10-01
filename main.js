const hamb = document.querySelector("#toggle-btn");

hamb.addEventListener("click", function(){
    document.querySelector("#sidebar").classList.toggle("expand");
})