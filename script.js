var popupbutton=document.querySelector(".addbutton")
var layout=document.querySelector(".overlay")
var box1=document.querySelector(".box")
popupbutton.addEventListener("click",function()
{ layout.style.display="block" 
    box1.style.display="block"})
var cancel=document.getElementById("cancel-book")
cancel.addEventListener("click",function(event){ 
    event.preventDefault()
    layout.style.display="none" 
    box1.style.display="none"
})
var namee=document.querySelector(".container")
var bookk=document.getElementById("booktitle")
var authorr=document.getElementById("author-name")
var des=document.getElementById("description")
var addbook=document.getElementById("add-book")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","con2")
    div.innerHTML=`<h2>${bookk.value}</h2>
    <h5>${authorr.value}</h5>
    <p>${des.value}</p> 
    <button onclick="rem(event)">CANCEL</button>`
    namee.append(div)
    layout.style.display="none" 
    box1.style.display="none"
})

function rem(event)
{
    event.target.parentElement.remove()
}
