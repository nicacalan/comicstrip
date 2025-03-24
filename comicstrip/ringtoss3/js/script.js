document.addEventListener("DOMContentLoaded", function () {
  const rabbitChoice = document.getElementById("rabbitChoice");

  if (rabbitChoice) {
    rabbitChoice.addEventListener("click", function () {
      window.location.href = "../strangediscovery4/strange-discovery.html";
    });
  }
});