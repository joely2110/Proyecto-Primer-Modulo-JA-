function calculateFertileDays() {
  const cycleLength = document.getElementById("cycle-length").value;
  const lastPeriod = new Date(document.getElementById("last-period").value);

  if (cycleLength && lastPeriod) {
    const ovulationDay = new Date(lastPeriod);
    ovulationDay.setDate(lastPeriod.getDate() + parseInt(cycleLength) - 14);

    const fertileStart = new Date(ovulationDay);
    fertileStart.setDate(ovulationDay.getDate() - 5);

    const fertileEnd = new Date(ovulationDay);
    fertileEnd.setDate(ovulationDay.getDate() + 1);

    document.getElementById(
      "fertility-result"
    ).innerText = `Tus días fértiles son del ${fertileStart.toDateString()} al ${fertileEnd.toDateString()}`;
  } else {
    document.getElementById("fertility-result").innerText =
      "Por favor, completa todos los campos.";
  }
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarToggler.getAttribute("aria-expanded") === "true") {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

function getCurrentYear() {
  const year = new Date().getFullYear();
  document.getElementById("current-year").textContent = year;
}
document.addEventListener("DOMContentLoaded", getCurrentYear);
