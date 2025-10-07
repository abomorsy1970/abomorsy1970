document.addEventListener('DOMContentLoaded', (event) => {
    const heartRateDisplay = document.getElementById('heart-rate-display');
    let heartRate = 75; // Starting simulated heart rate

    function updateHeartRate() {
        // Simulate heart rate fluctuation
        const variation = Math.floor(Math.random() * 5) - 2; // -2, -1, 0, 1, 2
        heartRate += variation;

        // Clamp heart rate to a reasonable range
        if (heartRate < 60) heartRate = 60;
        if (heartRate > 100) heartRate = 100;

        heartRateDisplay.textContent = heartRate;
    }

    // Update the heart rate every 2 seconds
    setInterval(updateHeartRate, 2000);
});