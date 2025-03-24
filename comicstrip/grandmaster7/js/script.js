document.addEventListener("DOMContentLoaded", () => {
  const rabbit = document.getElementById("shieldingRabbit");
  const tunnel = document.getElementById("runTunnel");

  if (rabbit) {
    rabbit.addEventListener("click", () => {
      window.location.href = "../shieldingrabbit8/shielding-rabbit.html";
    });
  }

  if (tunnel) {
    tunnel.addEventListener("click", () => {
      window.location.href = "../afterrunning9/after-running.html";
    });
  }
});
