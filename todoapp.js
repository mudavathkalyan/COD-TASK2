
let taskbtn=document.querySelector('#addbtn');
let unorderlist=document.querySelector(".unorder");
taskbtn.addEventListener('click',()=>
{
  let t1=document.querySelector('#tasks');
  
  if(t1.value=="")
  {
    alert("please enter tasks to do..");
  }
  else
  {

    let listone=document.createElement("LI");
    unorderlist.appendChild(listone);
    listone.innerHTML=t1.value;
    let span=document.createElement("SPAN");
    span.innerHTML="\u00d7";
    listone.appendChild(span);
  }
   t1.value="";
   savedata();
  });
  

unorderlist.addEventListener('click', function(e) 
{
  if (e.target.tagName === 'LI')
   {
    e.target.classList.toggle("checked");
  }
  else if (e.target.tagName === "SPAN")
  {
    e.target.parentElement.remove();
  }
  savedata();
}, false);

//data saved in localstorage
function savedata()
{
  localStorage.setItem("data",unorderlist.innerHTML);
}
function showdata()
{
  unorderlist.innerHTML=localStorage.getItem('data');
}
showdata();