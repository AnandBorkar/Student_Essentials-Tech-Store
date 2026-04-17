// Navbar active link highlight
const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {
  link.addEventListener("click", function () {
    links.forEach(l => l.classList.remove("font-bold", "underline"));
    this.classList.add("font-bold", "underline");
  });
});


// Smooth scroll (for future sections with IDs)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// Simple animation on scroll
const cards = document.querySelectorAll("section div");

window.addEventListener("scroll", () => {
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 50) {
      card.classList.add("opacity-100", "translate-y-0");
    }
  });
});


// Initial hidden state for animation
cards.forEach(card => {
  card.classList.add("opacity-0", "translate-y-10", "transition", "duration-700");
});


// Simple alert for demo (you can attach to button later)
function showMessage() {
  alert("Welcome to StudentTech Store 🚀");
}