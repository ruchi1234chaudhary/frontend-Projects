console.log("Radhe-Radhe")
 var isStatus = document.querySelector("h5")
 var add = document.querySelector("#add")
 var check = 0;
 add.addEventListener("click",()=>{
    if(check == 0){
        add.innerHTML = "Remove"
        add.style.background  = "black"
isStatus.innerHTML = "friends";
isStatus.style.color= "green";
check = 1;
    }
    else{
        add.innerHTML = "Add friends"
        add.style.background = "cadetblue"
        isStatus.innerHTML = "stranger"
        isStatus.style.color = "red"
        check = 0
    }
 })