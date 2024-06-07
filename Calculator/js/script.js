const InputBox = document.getElementById('input-box');




let string ="";
let gridItems = document.querySelectorAll('.grid-item');
Array.from(gridItems).forEach((item) =>{
    item.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            InputBox.value = '';
        }
        else if(e.target.innerHTML == 'DE'){
            InputBox.value = InputBox.value.slice(0, -1); 

        }
        else{
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
       
        }
    })
})
      




