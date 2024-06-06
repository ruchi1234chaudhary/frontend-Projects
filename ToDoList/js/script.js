console.log("Radhe Radhe");

const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
function handleClick(){
   if(inputBox.value === '' ){
    alert("Oops! I think you forget to write !")
   }
   else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    inputBox.value = '';
    saveData(); 
   }
}
document.getElementById('btn').addEventListener('click', handleClick);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
