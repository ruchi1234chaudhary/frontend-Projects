console.log("Radhe-Radhe");
//get the data

let users = [
   
        {
        profilePic: "https://images.unsplash.com/photo-1602077422495-c8733eb58c34?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic:"https://images.unsplash.com/photo-1619024304505-b31bef080370?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBvdHJhaXR8ZW58MHx8MHx8fDA%3D",
            pendingMessage: 4,
            location:" Delhi, India",
            name: "kiki",
            age: 20,
            interests: ["cricket", "badminton", "coding"],
            bio: "lorem10 uere ed jdeiroe ijie odsmnffdu hakkdsu wewe khdlsd",
            isFriend: null
        },
        {
            profilePic: "https://images.unsplash.com/photo-1552234994-66ba234fd567?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            displayPic:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG90cmFpdHxlbnwwfHwwfHx8MA%3D%3D",
            pendingMessage: 3,
            location: "Mumbai, India",
            name: "Anjali",
            age: 22,
            interests: ["reading", "yoga", "painting"],
            bio: "Passionate artist and book lover. Exploring life one page at a time.",
            isFriend: true
        },
        {
            profilePic: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            displayPic:"https://images.unsplash.com/photo-1618151313441-bc79b11e5090?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            pendingMessage: 5,
            location: "Bangalore, India",
            name: "Vikram",
            age: 25,
            interests: ["music", "traveling", "photography"],
            bio: "Traveler and photographer. Capturing moments from around the world.",
            isFriend: false
        },
        {
            profilePic: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            displayPic:"https://images.unsplash.com/photo-1607957159143-de3859adca2d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            pendingMessage: 2,
            location: "Kolkata, India",
            name: "Sneha",
            age: 23,
            interests: ["dancing", "cooking", "blogging"],
           bio: "Food blogger and dance enthusiast. Sharing my culinary adventures.",
            isFriend: true
        }
   
    
    
];
function select(elem){
    return document.querySelector(elem);
}



let curr = 0;
let isAnimating = false;

function setData(index){
    
    select(".prflimg img").src = users[index].profilePic;
    select(".badge h5").textContent = users[index].pendingMessage;
    select(".location h3").textContent = users[index].location;
    select(".name h1:nth-child(1)").textContent = users[index].name;
    select(".name h1:nth-child(2)").textContent = users[index].age;

    var clutter = "";
    users[index].interests.forEach(function(interest){
        clutter += ` <div class="tag flex rounded-full px-3 py-1 bg-white/30 items-center  gap-3 tex-white">
                        <i class=" text-sm ri-music-2-fill"></i>
                        <h3 class="text-sm tracking-tighter">${interest}</h3>
                    </div> `
    })
select(".tags").innerHTML = clutter;
select(".bio p").textContent = users[index].bio;


}
(function setInitial(){
    select(".maincard img").src = users[curr].displayPic;
    select(".incomingcard img").src = users[curr+1]?.displayPic;
   setData(curr);
curr = 2;

}) ();

function imageChange() {
    if(!isAnimating){
        isAnimating = true;
        let tl = gsap.timeline({
            
            onComplete: function(){
                isAnimating = false;
               let main =   select(".maincard");
               let incoming = select(".incomingcard");
         
               incoming.classList.remove("z-[2]");
               incoming.classList.add("z-[3]");
               gsap.set(main, {
                 scale:1,
                 opacity:1
               })
               if(curr === users.length) curr = 0;
               select(".maincard img").src = users[curr].displayPic;
            
               curr++;
         main.classList.remove("maincard");
         incoming.classList.add("maincard");
         main.classList.add("incomingcard");
         
             }
            });
            tl.to(".maincard",{
             scale:1.1,
             opacity:0,
             ease:Circ,
             duration:.9
            }, "a")
         .from(".incomingcard",{
             scale:.9,
             opacity:0,
             ease:Circ,
             duration:1.1
         }, "a")
    }
  

}


let deny = select(".deny");
let accept = select(".accept");
deny.addEventListener("click",function () {
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
      
        stagger:.06,
        ease: Circ,
        duration:1.5
    })
   
})
accept.addEventListener("click",function () {
    imageChange();
    setData(curr-1);
    gsap.from(".details .element",{
        y:"100%",
      
        stagger:.06,
        ease: Circ,
        duration:1.5
    })
   
})


(function containerCreator(){
    document.querySelectorAll(".element")
    .forEach(function(element){
        let div = document.createElement("div");
        div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
        div.appendChild(element);
        select(".details").appendChild(div);
    })
})();

