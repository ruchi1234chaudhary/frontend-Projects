// Variables for customization
const oopsButton = document.getElementById('oopsButton');
const messagePopup = document.getElementById('messagePopup');
const messageText = document.getElementById('messageText');
const closePopupButton = document.getElementById('closePopup');
const soundSelect = document.getElementById('soundSelect');
const messageInput = document.getElementById('messageInput');
const themeSelect = document.getElementById('themeSelect');
const animationToggle = document.getElementById('animationToggle');
const body = document.body;

// Predefined sounds
const sounds = {
    "cartoonOops.mp3": new Audio('cartoon.mp3'),
    "glassBreak.mp3": new Audio('glassbreaking.mp3'),
    "funnyVoice.mp3": new Audio('funnyVoice.mp3')
};

// Default sound
let selectedSound = sounds["cartoon.mp3"];

// Handle sound selection change
soundSelect.addEventListener('change', (e) => {
    const soundFile = e.target.value;
    selectedSound = sounds[soundFile];

    // Ensure sound is loaded when selected
    if (selectedSound) {
        selectedSound.load();  // Reload sound to ensure it's refreshed
    }
});

// Handle message input change
messageInput.addEventListener('input', (e) => {
    messageText.textContent = e.target.value ? e.target.value : "Oops! You've broken the internet!";
});

// Handle theme selection
themeSelect.addEventListener('change', (e) => {
    body.className = e.target.value;
});

// Handle button click
oopsButton.addEventListener('click', () => {
    // Play selected sound
    if (selectedSound) {
        selectedSound.play();
    }

    // Show popup message
    messagePopup.style.display = 'flex';

    // Check if animation is enabled
    if (animationToggle.checked) {
        oopsButton.classList.add('shake');
    } else {
        oopsButton.classList.remove('shake');
    }
});

// Close the popup
closePopupButton.addEventListener('click', () => {
    messagePopup.style.display = 'none';
});

// Add shake animation on click
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
    .shake {
        animation: shake 0.5s ease-in-out;
    }
`, styleSheet.cssRules.length);

styleSheet.insertRule(`
    @keyframes shake {
        0% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
        100% { transform: translateX(0); }
    }
`, styleSheet.cssRules.length);

