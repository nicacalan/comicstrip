document.addEventListener("DOMContentLoaded", () => {
  const fade = document.getElementById("fadeAway");

  if (fade) {
    fade.addEventListener("click", () => {
      window.location.href = "../theend10/the-end.html";
    });
  }
});