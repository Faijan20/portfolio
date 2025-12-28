// Fade-in on scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
});

document.querySelectorAll('.section, .project').forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(40px)';
  el.style.transition = '0.8s ease';
  observer.observe(el);
});
const modal = document.getElementById("progressModal");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".coming-soon").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    modal.style.display = "flex";
  });
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

modal.addEventListener("click", e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
