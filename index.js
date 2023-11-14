const cards = document.querySelectorAll(".card");

function toggleCard() {
  this.classList.toggle("active");
}

function openCard(e) {
  if (e.propertyName.includes("flex")) {
    e.target.classList.toggle("card-open");
  }
}

cards.forEach((card) => card.addEventListener("click", toggleCard));
cards.forEach((card) => card.addEventListener("transitionend", openCard));
