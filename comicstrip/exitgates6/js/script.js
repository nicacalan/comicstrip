document.addEventListener("DOMContentLoaded", () => {
  const returnStart = document.getElementById("returnStart");

  if (returnStart) {
    returnStart.addEventListener("click", () => {
      window.location.href = "../carnivalgates1/carnival-gates.html";
    });
  }
});