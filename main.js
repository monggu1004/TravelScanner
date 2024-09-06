const bars = document.querySelector(".fa-bars");
const header = document.querySelector("header");
const menubox = document.createElement("div");
menubox.classList.add("menubox");
header.appendChild(menubox);
menubox.classList.add("hidden");

function openmenu() {
  menubox.classList.toggle("hidden");
}

bars.addEventListener("click", openmenu);
