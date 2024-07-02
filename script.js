// JavaScript to display current time in UTC and day of the week
document.addEventListener("DOMContentLoaded", function() {
    updateTimeAndDay();
    setInterval(updateTimeAndDay, 1000);
});

function updateTimeAndDay() {
    const currentTimeElement = document.getElementById("currentTime");
    const currentDayElement = document.getElementById("currentDay");

    const now = new Date();
    const utcNow = new Date(now.toUTCString());
    const dayOfWeek = utcNow.toLocaleDateString('en-US', { weekday: 'long' });

    currentTimeElement.textContent = utcNow.toISOString().split('T')[1].split('.')[0];
    currentDayElement.textContent = dayOfWeek;
}
