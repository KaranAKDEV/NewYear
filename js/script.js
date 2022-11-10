const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minute");
const seconds = document.getElementById("seconds");

function updateTime() {
  const currentYear = new Date().getFullYear();

  const newYear = new Date(`January 1 ${currentYear + 1} 00:00:00`);
  const currentDay = new Date();

  const remainDays = newYear - currentDay;

  const bDays = Math.floor(remainDays / 1000 / 60 / 60 / 24);
  const bHours = Math.floor(remainDays / 1000 / 60 / 60) % 24;
  const bMinutes = Math.floor(remainDays / 1000 / 60) % 60;
  const bSeconds = Math.floor(remainDays / 1000) % 60;

  days.textContent = bDays < 10 ? "0" + bDays : bDays;
  hours.textContent = bHours < 10 ? "0" + bHours : bHours;
  minutes.textContent = bMinutes < 10 ? "0" + bMinutes : bMinutes;
  seconds.textContent = bSeconds < 10 ? "0" + bSeconds : bSeconds;
}

setInterval(updateTime, 1000);
