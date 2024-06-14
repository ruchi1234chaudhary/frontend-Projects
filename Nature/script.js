document.addEventListener("DOMContentLoaded", () => {
    const birdSound = document.getElementById('birdSound');
    const natureSound = document.getElementById('natureSound');

    // Play ambient nature sound
    natureSound.play();

    // Randomly play bird chirping sound
    setInterval(() => {
        birdSound.currentTime = 0;
        birdSound.play();
    }, Math.random() * 5000 + 5000); // play every 5-10 seconds

    // Add click interaction to shake the tree more vigorously
    const tree = document.querySelector('.tree');
    tree.addEventListener('click', () => {
        tree.style.animation = 'shake 0.5s';
        setTimeout(() => {
            tree.style.animation = 'shake 3s infinite';
        }, 500);
    });
});
