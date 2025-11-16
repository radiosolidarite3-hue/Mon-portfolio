document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero-text h2");
  if(heroText){
    heroText.style.opacity = 0;
    setTimeout(() => {
      heroText.style.transition = "opacity 2s";
      heroText.style.opacity = 1;
    }, 500);
  }
});

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Merci pour votre message ! Je vous répondrai bientôt.");
  });
}
