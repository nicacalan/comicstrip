document.addEventListener("DOMContentLoaded", () => {
  const mirrorChoice = document.getElementById("enterMirror");

  if (mirrorChoice) {
    mirrorChoice.addEventListener("click", () => {
      window.location.href = "../strangediscovery4/strange-discovery.html";
    });
  }
});