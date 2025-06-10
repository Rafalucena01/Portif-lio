console.log("JavaScript funcionando!");

document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso!");

  const toggleButton = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
