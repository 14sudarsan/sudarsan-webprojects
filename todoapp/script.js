var unorderlist=document.getElementById("list-elements")
var inputbox=document.getElementById("inputbox-btnid")

var addbutton=document.getElementById("addbtn")

addbutton.addEventListener("click",function(){
    var listitem=document.createElement("li")
    listitem.innerHTML=inputbox.value+ "<button class='externalbutton'onclick='change(event)' id='external-id'>X</button>"
    unorderlist.append(listitem)
})

function change(event){(
    event.target.parentElement.remove()
)}