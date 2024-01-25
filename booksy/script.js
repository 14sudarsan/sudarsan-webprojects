var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function()
{
    popupoverlay.style.display="block";
    popupbox.style.display="block";
})
var cancelbutton = document.getElementById("cancel-button")

cancelbutton.addEventListener("click" ,function(){
     popupoverlay.style.display="none";
    popupbox.style.display="none";
})

var innerbutton=document.getElementById("inner-button")
var container=document.querySelector(".container")
var booktitleinput=document.getElementById("book-title1")
var bookauthorinput=document.getElementById("book-author1")
var bookdescriptioninput=document.getElementById("book-description1")

innerbutton.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=`<h1>${booktitleinput.value}</h1>
    <h5>${bookauthorinput.value}</h5>
    <p>${bookdescriptioninput.value}</p>
    <button onclick="deletechange(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display="none";
    popupbox.style.display="none";

})
function deletechange(event){
    event.target.parentElement.remove() 
}