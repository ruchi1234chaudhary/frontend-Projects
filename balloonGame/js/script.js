console.log("Radhe-Radhe")
window.onload = function() {
    var boxes = document.querySelectorAll('.baloon1');
    var boxCount = boxes.length;
    var posYs = []; // Array to store Y positions for each box
    var speeds = []; // Array to store speeds for each box
  
    // Initialize Y positions and speeds for each box
    for (var i = 0; i < boxCount; i++) {
      posYs[i] = window.innerHeight;
      speeds[i] = Math.random() * 2 + 1; // Random speed between 1 and 5
    }
  
    function moveUp() {
      for (var i = 0; i < boxCount; i++) {
        posYs[i] -= speeds[i]; // Adjust the Y position based on speed
        boxes[i].style.top = posYs[i] + 'px';
  
        if (posYs[i] <= -100) { // When the box goes out of the screen
          posYs[i] = window.innerHeight; // Reset to bottom of screen
        }
      }
  
      requestAnimationFrame(moveUp);
    }
  
    moveUp(); // Start the animation
 
  moveUp();
  
  
     // Start the animation
    boxes.forEach(function(box,index){
        box.addEventListener('click',function(){
            var img = document.createElement('img');
            img.src = 'https://cdn.pixabay.com/photo/2016/08/21/18/48/emoticon-1610518_1280.png';
            img.style.width = '100px'; // Adjust the width of the image as needed
      img.style.height = '100px'; // Adjust the height of the image as needed
      img.style.position = 'absolute';
      img.style.top = posYs[index] + 'px'; // Set image position same as the clicked box
      img.style.left = box.offsetLeft + 'px'; // Set image position same as the clicked box
      document.body.appendChild(img);
      img.addEventListener('click', function() {
        // Your onclick function logic here
       
      });

        })
    })
    
};
       
   
  