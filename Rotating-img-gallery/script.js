
console.log("Radhe-Radhe")
const imgConatiner = document.querySelector(".img-container");

const prevE1 = document.getElementById("prev");
const nextE1 = document.getElementById("next");
let x=0;
prevE1.addEventListener("click",()=>{
x=x+45;
updateGallery()
}
);
nextE1.addEventListener("click",()=>{
    x=x-45;
    updateGallery()
    }
    );

function updateGallery(){
    imgConatiner.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    setTimeout(()=>{
        x=x-45
        updateGallery()
    },4000)
}
updateGallery();