// console.log("Radhe-Radhe")
// var elem = document.querySelectorAll(".elem");

// elem.forEach(function(val){
//     val.addEventListener("mouseenter",function(){
        
       
//             val.childNodes[3].style.opacity = 1;
        
        
//     });
//     val.addEventListener("mouseleave",function(){
       
//             val.childNodes[3].style.opacity = 0;
       
//     });
//     val.addEventListener("mousemove",function(det){
       
//            val.childNodes[3].style.left = det.x + "px";
//            val.childNodes[3].style.top = det.y + "px";
       
//     });

// });


console.log("Radhe-Radhe");
var elem = document.querySelectorAll(".elem");

elem.forEach(function(val){
    var images = val.querySelectorAll(".elem img"); // Select all img elements inside val

    images.forEach(function(img) {
        val.addEventListener("mouseenter", function(){
            img.style.opacity = 1;
        });
        val.addEventListener("mouseleave", function(){
            img.style.opacity = 0;
        });
        val.addEventListener("mousemove", function(det){
            img.style.left = det.x + "px";
            img.style.top = det.y + "px";
        });
    });
});

