// scripts.js
function updateTimeAndDay() {
  const utcTimeElement = document.getElementById('utc-time');
  const dayOfWeekElement = document.getElementById('day-of-week');

  const now = new Date();
  const utcHours = now.getUTCHours().toString().padStart(2, '0');
  const utcMinutes = now.getUTCMinutes().toString().padStart(2, '0');
  const utcSeconds = now.getUTCSeconds().toString().padStart(2, '0');
  const utcTime = `${utcHours}:${utcMinutes}:${utcSeconds}`;

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDay = daysOfWeek[now.getUTCDay()];

  utcTimeElement.textContent = utcTime;
  dayOfWeekElement.textContent = currentDay;
}

setInterval(updateTimeAndDay, 1000);
updateTimeAndDay();
