let btnMenu = document.getElementById('btn-abrirmenu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('over-lay-btmenu')

btnMenu.addEventListener('click',() =>{
    menu.classList.add('abrir-menu')
})


menu.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu')
})

overlay.addEventListener('click',() =>{
    menu.classList.remove('abrir-menu')
})
const el = document.querySelector("#textpoint");
const text = "Ola! Bem vindo ao meu portifolio, sou Tarcisio Costa, desenvolvedor full stack.";
const interval = 50;

function showtext(el, text, interval){
    const char = text.split("").reverse();

    const typer = setInterval(() => {
        if(!char.length){
            return clearInterval(typer); 
        }

        const next = char.pop();

        el.innerHTML += next;

    }, interval);

}



showtext(el , text, interval);



const myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('showicones')
        } else{
            entry.target.classList.remove('showicones')
        }
    })
})

const elements = document.querySelectorAll('.icones')

elements.forEach((element) => myObserver.observe(element))

const Spy = new IntersectionObserver((entries)=> {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('slearning')
        } else{
            entry.target.classList.remove('slearning')
        }
    })
})
 
const element = document.querySelectorAll('.learning')

element.forEach((element)=> Spy.observe(element))





const sover = new IntersectionObserver((entries)=> {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('soverlayer')
        } else{
            entry.target.classList.remove('soverlayer')
        }
    })
})
 
const elementum = document.querySelectorAll('.overlayer')

element.forEach((element)=> sover.observe(element))



//const salario = document.querySelector(".salario")
 
//salario.addEventListener('click', ()=> {
    //window.scroll({top:window.innerHeight ,behavior:"smooth"})
//})