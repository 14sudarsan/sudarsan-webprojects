count=0;

var countnum=document.querySelector(".value")

var increas=document.getElementById("btn-increase")
var reset=document.getElementById("btn-reset")
var decrease=document.getElementById("btn-decrease")

increas.addEventListener('click',function(){
  count++;
  countnum.textContent=count;
  
  if(count>0){
    countnum.style.color="green";
  }
  
})
decrease.addEventListener("click",function(){
    count--;
    countnum.textContent=count;
    if(count<0){
        countnum.style.color="red"; 
    }
    
})
reset.addEventListener("click",function(){
    count=0
    countnum.textContent=count;
    countnum.style.color="black";
})

