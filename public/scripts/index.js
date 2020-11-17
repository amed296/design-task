let navbar = document.getElementById("navbar")
let navimg = document.querySelector(".logo > a > img")
window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0) {
        navbar.style.position = `fixed`;
    }
    if (window.scrollY > 50) {
        navbar.style.height = `15vh`;
        navimg.classList.add("shrink-img")
    }else {
        navbar.style.height = `24vh`;
        navimg.classList.remove("shrink-img")
    }
})


let scrollUp = document.getElementById("scrollTop")

scrollUp.addEventListener('click', ()=>{
    window.scrollTo({
        top: 0
    })
})


let todosCheck = document.querySelectorAll('.todo-select')
let todos = document.querySelectorAll('.todo')

todosCheck.forEach(check =>{
    check.addEventListener('change', ()=>{
        if(check.checked) {
            let id = check.id;
            todos[id].classList.add('selected')
        }else if(check.checked == false) {
            let id = check.id;
            todos[id].classList.remove('selected')
        }
        
    })
})