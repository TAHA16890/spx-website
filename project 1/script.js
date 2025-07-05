document.querySelector('.cta-btn').addEventListener('click', () => {
  alert("Thanks for your interest! AI Expert hiring is coming soon.");
});


// قسم الفريق 
// JavaScript: animation عند التمرير
window.addEventListener("scroll", () => {
  document.querySelectorAll(".team-member").forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});




