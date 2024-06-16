console.log("Radhe-Radhe")
const starsE1 = document.querySelectorAll(".fa-star");
const emojisE1 = document.querySelectorAll(".far");

starsE1.forEach((starE1,index) => {
    starE1.addEventListener("click", ()=>{
        updateRating(index);
    });
});
function updateRating(index){
starsE1.forEach((starE1,idx)=>{
    if(idx < index+1){
        starE1.classList.add("active");
    }
    else{
        starE1.classList.remove("active")
    }
});
emojisE1.forEach((emojiE1)=>{
    emojiE1.style.transform=`translateX(-${index * 50}px)`;
   
});




}
