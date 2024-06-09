console.log("Radhe-Radhe");
let speech = new SpeechSynthesisUtterance();
const textArea = document.getElementById("text");
const listen = document.getElementById("buttons");
listen.addEventListener("click",()=>{
    speech.text = textArea.value;
    window.speechSynthesis.speak(speech);
});


