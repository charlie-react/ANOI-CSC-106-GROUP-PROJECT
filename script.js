// All team members contributed to writing the Javascript

document.addEventListener("DOMContentLoaded", () => {
  const quoteBtn = document.getElementById("quote-btn");
  const quoteText = document.getElementById("quote");


  const quotes = [
    "Style is a way to say who you are without having to speak.",
    "Fashion is what you buy. Style is what you do with it.",
    "Clothes mean nothing until someone lives in them.",
    "In difficult times, fashion is always outrageous.",
    "Dress like you're already famous."
  ];


  quoteBtn.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    console.log(randomIndex)
    quoteText.textContent = quotes[randomIndex];
  });


});


document.getElementById("inquiry-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const formInputs = document.getElementsByTagName("input")
  const formTextAreas = document.getElementsByTagName("textarea")

  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].value = "";
  }

  for (let i = 0; i < formTextAreas.length; i++) {
    formTextAreas[i].value = "";
  }

  alert("Thanks for reaching out! We'll get back to you soon.");
});

document.getElementById("menu-toggle")?.addEventListener("click", function () {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
});