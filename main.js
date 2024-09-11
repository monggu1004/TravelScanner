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

const Wbuton = document.querySelector(".Wbuton");
const Cbuton = document.querySelector(".Cbuton");
const dataBox = document.querySelector(".dataBox");
const API_KEY = "0cb7bf6dd6a2cd3aa583cb6e16fd0525";
async function runOk(position) {
  const lati = position.coords.latitude;
  const longi = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}`;
  const response = await fetch(url).then((response) => response.json());

  Wbuton.addEventListener("click", showWeather);
  Cbuton.addEventListener("click", showCity);
  const box = document.querySelector(".box");

  function showCity(event) {
    event.preventDefault();
    const kid = box.firstElementChild;
    Wbuton.disabled = false;

    Wbuton.classList.remove("clickButton");
    Cbuton.classList.add("clickButton");
    const dataBox1 = document.createElement("div");
    dataBox1.classList.add("dataBox1");
    box.appendChild.dataBox1;
    dataBox1.innerText = response.name;

    if (kid) {
      console.log(kid);
      box.replaceChild(dataBox1, kid);
      Cbuton.disabled = true;
    } else {
      box.appendChild(dataBox1);
      Cbuton.disabled = true;
    }
  }
  function showWeather(event) {
    event.preventDefault();
    const kid = box.firstElementChild;
    Cbuton.disabled = false;

    Wbuton.classList.add("clickButton");
    Cbuton.classList.remove("clickButton");
    const dataBox2 = document.createElement("div");
    dataBox2.classList.add("dataBox2");
    dataBox2.innerText = response.weather[0].main;

    console.log(kid);
    if (kid) {
      box.replaceChild(dataBox2, kid);
      Wbuton.disabled = true;
    } else {
      box.appendChild(dataBox2);
      Wbuton.disabled = true;
    }
  }
}
function runError() {
  alert("에러");
}
navigator.geolocation.getCurrentPosition(runOk, runError);

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
