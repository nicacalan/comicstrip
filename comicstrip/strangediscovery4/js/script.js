document.addEventListener("DOMContentLoaded", () => {
  const masked = document.getElementById("maskedAcrobat");
  const exit = document.getElementById("exitGates");

  if (masked) {
    masked.addEventListener("click", () => {
      window.location.href = "../maskedacrobat5/masked-acrobat.html";
    });
  }

  if (exit) {
    exit.addEventListener("click", () => {
      window.location.href = "../exitgates6/exit-gates.html";
    });
  }
});