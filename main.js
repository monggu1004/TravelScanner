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

const Abuton = document.querySelector(".Abuton");
const Bbuton = document.querySelector(".Bbuton");
const Cbuton = document.querySelector(".Cbuton");
const box = document.querySelector(".box");

const dataBox = document.querySelector(".dataBox");
const API_KEY = "0cb7bf6dd6a2cd3aa583cb6e16fd0525";
async function runOk(position) {
  const lati = position.coords.latitude;
  const longi = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${API_KEY}`;
  const response = await fetch(url).then((response) => response.json());
  console.log(response);

  Abuton.addEventListener("click", showWeather);
  Bbuton.addEventListener("click", showCity);
  Cbuton.addEventListener("click", showC);

  function showWeather(event) {
    event.preventDefault();
    Abuton.disabled = true;
    Cbuton.disabled = false;
    Bbuton.disabled = false;
    const kid = box.firstElementChild;

    Abuton.classList.add("clickButton");
    Cbuton.classList.remove("clickButton");
    Bbuton.classList.remove("clickButton");
    const dataBox1 = document.createElement("div");
    dataBox1.classList.add("dataBox1");
    dataBox1.innerText = response.weather[0].main;

    console.log(kid);
    if (kid) {
      box.replaceChild(dataBox1, kid);
      Abuton.disabled = true;
    } else {
      box.appendChild(dataBox1);
      Abuton.disabled = true;
    }

    listbox = document.createElement("div");
    listbox.classList.add("subcover");
    box.appendChild(listbox);
    addbox();
  }
  function showCity(event) {
    event.preventDefault();
    const kid = box.firstElementChild;
    Bbuton.disabled = true;
    Cbuton.disabled = false;
    Abuton.disabled = false;

    Abuton.classList.remove("clickButton");
    Cbuton.classList.remove("clickButton");
    Bbuton.classList.add("clickButton");
    const dataBox2 = document.createElement("div");
    dataBox2.classList.add("dataBox2");
    box.appendChild.dataBox2;
    dataBox2.innerText = response.name;

    if (kid) {
      console.log(kid);
      box.replaceChild(dataBox2, kid);
      Bbuton.disabled = true;
    } else {
      box.appendChild(dataBox2);
      Bbuton.disabled = true;
    }
  }
  function showC(event) {
    event.preventDefault();
    const kid = box.firstElementChild;
    Cbuton.disabled = true;
    Bbuton.disabled = false;
    Abuton.disabled = false;

    Abuton.classList.remove("clickButton");
    Bbuton.classList.remove("clickButton");
    Cbuton.classList.add("clickButton");
    const dataBox3 = document.createElement("div");
    dataBox3.classList.add("dataBox3");
    box.appendChild.dataBox3;
    dataBox3.innerText = response.weather[0].description;

    if (kid) {
      console.log(kid);
      box.replaceChild(dataBox3, kid);
      Cbuton.disabled = true;
    } else {
      box.appendChild(dataBox3);
      Cbuton.disabled = true;
    }
  }

  function addbox() {
    const subcover = document.querySelector(".subcover");
    subcover.classList.add("subcover");
    box.appendChild(subcover);
    subcover.innerText = "sdf";
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
