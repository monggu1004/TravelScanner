const bars = document.querySelector(".fa-bars");
const header = document.querySelector("header");
const menubox = document.createElement("div");
const boton = document.querySelector("boton");
menubox.classList.add("menubox");
header.appendChild(menubox);
menubox.classList.add("hidden");

function openmenu() {
  menubox.classList.toggle("hidden");
}

const API_KEY = "0cb7bf6dd6a2cd3aa583cb6e16fd0525";
async function runOk(position) {
  const lati = position.coords.latitude;
  const longi = position.coords.longitude;
  console.log(lati);
  console.log(longi);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}`;
  const dd = await fetch(url).then((response) => response.json());
  console.log(dd.weather[0].main);
}
function runError() {
  alert("에러");
}
navigator.geolocation.getCurrentPosition(runOk, runError);
const box = document.querySelector(".dataBox");
box.addEventListener("click", runOk);
bars.addEventListener("click", openmenu);

// async function api() {r
//   const data = await fetch(
//   );
//   console.log(data);
//   const date2 = await data.json();
//   console.log(date2);
//   const data3 = date2.response.body.items.item[0];
//   console.log(data3);
// }

// api();
