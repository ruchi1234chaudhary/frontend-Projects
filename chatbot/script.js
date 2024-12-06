// Selectors
const chatDisplay = document.getElementById("chat-display");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

// Event Listener for Sending Messages
sendBtn.addEventListener("click", () => {
  const userMessage = chatInput.value.trim();

  if (userMessage) {
    // Add User Message
    addMessage(userMessage, "user-message");

    // Clear Input
    chatInput.value = "";

    // Simulate Bot Response
    setTimeout(() => {
      addMessage("This is a bot response.", "bot-message");
    }, 1000);
  }
});

// Function to Add Messages
function addMessage(text, className) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", className);
  messageElement.textContent = text;

  chatDisplay.appendChild(messageElement);

  // Auto-scroll to bottom
  chatDisplay.scrollTop = chatDisplay.scrollHeight;
}

  