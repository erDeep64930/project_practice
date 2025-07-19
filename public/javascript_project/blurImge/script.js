window.onload = function() {
    const image = document.getElementById('image');
    const percentageDisplay = document.getElementById('percentage');
    let percentage = 0;
    
    // Start the animation after a short delay
    setTimeout(() => {
        const interval = setInterval(() => {
            if (percentage <= 100) {
                percentageDisplay.textContent = percentage + '%';
                percentage++;
                image.style.filter = `blur(${10 - (percentage / 10)}px)`; // Adjust blur based on percentage
            } else {
                clearInterval(interval);
            }
        }, 50); // Change interval for speed adjustment
    }, 50); // Delay before starting animation
};
