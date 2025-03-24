document.addEventListener("DOMContentLoaded", () => {
  const grandMaster = document.getElementById("grandMasterChoice");

  if (grandMaster) {
    grandMaster.addEventListener("click", () => {
      window.location.href = "../grandmaster7/grand-master.html";
    });
  }
});