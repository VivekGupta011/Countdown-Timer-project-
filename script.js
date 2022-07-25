const days_p1 = document.getElementById("days-p");
const hours_p1 = document.getElementById("hours-p");
const minute_p1 = document.getElementById("minutes-p");
const second_p1 = document.getElementById("seconds-p");

const newyears = "1 jan 2021";

function countdown() {
  const newyearsDate = new Date(newyears);
  const currentDate = new Date();

  const totalseconds = (currentDate-newyearsDate) / 1000;
  const days= Math.floor(totalseconds / 3600 / 24);
  const hours = Math.floor(totalseconds / 3600) % 24;
  const mins = Math.floor(totalseconds / 60) % 60;
  const seconds = Math.floor(totalseconds) % 60;

  days_p1.innerHTML = formatTime(days);
  hours_p1.innerHTML = formatTime(hours);
  minute_p1.innerHTML = formatTime(mins);
  second_p1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `${time}` : time;
}

// initial call
countdown();
setInterval(countdown, 1000);
