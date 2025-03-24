document.addEventListener("DOMContentLoaded", () => {
  const openEyes = document.getElementById("openEyes");

  if (openEyes) {
    openEyes.addEventListener("click", () => {
      window.location.href = "../theend10/the-end.html";
    });
  }
});