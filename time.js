const element = document.body;
const main = document.querySelector("main");
const title = document.title;

const currentTime = new Date();

const day = currentTime.getHours() >= 6 && currentTime.getHours() < 18;
const night = !day;

if (day) {
  element.classList.add("day-state");
  if (title === "Wordlands Cemetery") {
    main.style.display = "none";
  }
} else {
  element.classList.remove("day-state");
}

if (night) {
  if (title === "Wordlands") {
    main.style.display = "none";
  }
}
