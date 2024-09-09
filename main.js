const bars = document.querySelector(".fa-bars");
const header = document.querySelector("header");
const menubox = document.createElement("div");
menubox.classList.add("menubox");
header.appendChild(menubox);
menubox.classList.add("hidden");

function openmenu() {
  menubox.classList.toggle("hidden");
}
function runOk(position) {
  console.log(position);
  const lati = position.coords.latitude;
  const longi = position.coords.longitude;
  const myapi = "0cb7bf6dd6a2cd3aa583cb6e16fd0525";

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=lati&lon=longi&appid=myapi`;
  console.log(url);
}
function runError() {
  alert("에러");
}
navigator.geolocation.getCurrentPosition(runOk, runError);

bars.addEventListener("click", openmenu);

// async function api() {
//   const data = await fetch(
//   );
//   console.log(data);
//   const date2 = await data.json();
//   console.log(date2);
//   const data3 = date2.response.body.items.item[0];
//   console.log(data3);
// }

// api();
