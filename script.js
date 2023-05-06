console.log("hello world")
let menuButton=document.querySelector('button')
let header= document.querySelector("header")
let navBar=document.querySelector("nav")
let list= document.querySelectorAll("li")
let display
menuButton.addEventListener(
    "click",
    ()=>{
        display=!display
        console.log("clicked",display);
        if(display){
            header.className="slider"
            navBar.className=""
        }
        if(!display){
            header.className="dropDown"
            navBar.className="clear"
        }
    }
)
list.forEach((e)=>{
   e.onclick=()=>{
    console.log("hello")
    header.className="dropDown"
    navBar.className="clear"
   }
})