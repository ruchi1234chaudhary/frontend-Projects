// const questions=[{
//     question:"Your situation right now?",
//     answers:[
//         {text:"Bahut Padhna Bacha hua hai", correct:false},
//         {text:"yad! aya ki sabkuchh bacha hua hai", correct:false},
//         {text:"Start to karna parega!", correct:false},
//         {text:"Ayee, bhai Padhna hi nhi hai hatao yar!", correct:true},

//     ]
// },

// {
//     question:"Accurate description of a 404 error",
//     answers:[
//         {text:"When this was the last date of Assignment", correct:false},
//         {text:"You don't have backup as a bestie", correct:false},
//         {text:"Confused? Single:Mingle", correct:false},
//         {text:"Why it is 404?", correct:true},

//     ]
// },


// ]
// const questionElement = document.getElementById("question");
// const optionElement = document.getElementById("options");
// const nextBtn = document.getElementById("next-btn");
// let currentQuestionIndex = 0;
// let score = 0;
// function startQuiz(){
//     currentQuestionIndex =0;
//     score=0;
//     nextBtn.innerHTML = "Next";
//     showQuestion();
// }
// function showQuestion(){
//     resetState();
//     let currentQuestion = questions[currentQuestionIndex];
//     let questionNo = currentQuestionIndex + 1;
//     questionElement.innerHTML = questionNo +"." +currentQuestion.question;
//     currentQuestion.answers.forEach(answer =>{
//         const button = document.createElement("button");
//         button.innerHTML = answer.text;
//         button.classList.add("btn");
//         optionElement.appendChild(button);
//     });
// }
        
//    function resetState(){
//     nextBtn.style.display = "none";
//     while(optionElement.firstChild){
//         optionElement.removeChild(optionElement.firstChild);
//    }
// }
// startQuiz();
const questions = [
    {
        question: "What’s the real purpose of the snooze button?",
        options: ["To give you extra sleep", "To train your reflexes", "To see how many times you can press it before you’re late", "It’s a myth; nobody actually uses it"],
        answer: "To see how many times you can press it before you’re late"
    },
    {
        question: "What’s the real reason students go to the library during finals week?",
        options: ["To study", "To socialize quietly", "To take aesthetically pleasing Instagram photos", "To appreciate the soothing sound of silence"],
        answer: "To take aesthetically pleasing Instagram photos"
    },
    {
        question: "What’s the best excuse for avoiding roommates?",
        options: ["I’m busy studying", "I’m out for a run", "I’m attending a mandatory campus event", "I’m conducting important research on the underside of my eyelids"],
        answer: "I’m conducting important research on the underside of my eyelids"
    },
    {
        question: "How do you make it through a boring lecture?",
        options: ["Take meticulous notes", "Sit in the front row for maximum engagement", "Count ceiling tiles", "Plan your next meal"],
        answer: "Plan your next meal"
    },
    {
        question: "What’s the best way to escape a boring party?",
        options: ["Find a polite excuse and leave quietly", "Drink until it becomes interesting", "Hide in the bathroom until everyone leaves", "Stage a fake emergency and run for your life"],
        answer: "Stage a fake emergency and run for your life"
    },
    {
        question: "How do you know it’s time to do laundry?",
        options: ["When you run out of clean clothes", "When you can smell yourself from across the room", "When your roommate starts wearing a gas mask", "Laundry is a social construct; I prefer the natural scent of my clothing"],
        answer: "When you can smell yourself from across the room"
    },
    {
        question: "What’s the best college meal hack?",
        options: ["Ramen with a gourmet twist", "Microwaved leftovers", "Dining hall buffet night", "Pizza delivery, again"],
        answer: "Pizza delivery, again"
    },
    {
        question: "How do you make friends in college?",
        options: ["Join clubs and organizations", "Strike up conversations in class", "Show off your dance moves at parties", "Bribery with snacks"],
        answer: "Bribery with snacks"
    },
    {
        question: "What’s the most common reason for skipping class?",
        options: ["Illness", "Oversleeping", "Laziness", "The overwhelming desire to binge-watch Netflix"],
        answer: "The overwhelming desire to binge-watch Netflix"
    },
    {
        question: "How do you celebrate the end of finals?",
        options: ["Sleep for days", "Have a wild party", "Treat yourself to a fancy meal", "Panic about next semester’s classes"],
        answer: "Sleep for days"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        
        optionsElement.innerHTML = '';
        currentQuestion.options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'btn text-left text-white border-2 w-full p-2 text-xl font-bold rounded-xl mt-10 hover:bg-red-500 hover: border-2 border-white-600';
            button.style.textShadow = '2px 2px 5px rgb(234, 35, 35)';
            button.onclick = () => {
                if (option === currentQuestion.answer) {
                    score++;
                }
                currentQuestionIndex++;
                loadQuestion();
            };
            optionsElement.appendChild(button);
        });
    } else {
        displayScore();
    }
}

function displayScore() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const nextButton = document.getElementById('next-btn');
    
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    optionsElement.innerHTML = '';
    nextButton.style.display = 'none';
}

document.getElementById('next-btn').onclick = () => {
    currentQuestionIndex++;
    loadQuestion();
};

// Load the first question when the page loads
window.onload = loadQuestion;
