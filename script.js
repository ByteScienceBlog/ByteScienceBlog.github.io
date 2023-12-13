document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading with a countdown
    let percentage = 0;
    const loadingText = document.getElementById("loadingText");
    const loadingPercentage = document.getElementById("loadingPercentage");

    const loadingInterval = setInterval(function() {
        percentage++;
        loadingText.textContent = "Loading...";
        loadingPercentage.textContent = `${percentage}%`;

        if (percentage === 100) {
            clearInterval(loadingInterval);

            // Show the welcome pop-up after loading
            const welcomePopup = document.getElementById("welcomePopup");
            welcomePopup.style.display = "block";

            // Simulate additional delay for demonstration
            setTimeout(function() {
                welcomePopup.style.display = "none";
            }, 3000);
        }
    }, 30);
});
