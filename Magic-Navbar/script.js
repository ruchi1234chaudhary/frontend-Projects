// const list = document.querySelectorAll('.list');

// function activelink(){
//     list.forEach((item) =>
//         item.classList.remove('active'));
// this.classList.add('active');
//     }



// list.forEach((item) => item.addEventlistener('click', activelink));

const list = document.querySelectorAll('.list');
const indicator = document.querySelector('.indicator');

function activelink() {
    // Remove active class from all list items
    list.forEach((item) => item.classList.remove('active'));

    // Add active class to the clicked item
    this.classList.add('active');

    // Get the index of the active item
    const index = Array.from(list).indexOf(this);

    // Update the indicator position
    indicator.style.transform = `translateX(${index * 70}px)`;
}

// Attach event listeners to each list item
list.forEach((item) => item.addEventListener('click', activelink));
