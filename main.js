const bars = document.querySelector(".fa-bars");
const header = document.querySelector("header");
const boton = document.querySelector("boton");
const body = document.querySelector("body");

const menubox = document.createElement("div");
body.appendChild(menubox);
menubox.classList.add("menubox");
// menubox.classList.add("hidden");
function openmenu() {
  if (menubox.classList.contains("hidden")) {
    menubox.classList.remove("hidden");
  } else {
    menubox.classList.add("hidden");
  }
}

const Abuton = document.querySelector(".Abuton");
const Bbuton = document.querySelector(".Bbuton");
const Cbuton = document.querySelector(".Cbuton");
const box = document.querySelector(".box");
const API_KEY =
  "1qSXQvr3pLdkKVxILFAgfY8T%2BSxI5vYF%2Frkzgb%2BIxYtxl5wbl99nw%2F4dsC8%2BVQOurBn9EuV%2Fee87RwpiwJcLIg%3D%3D";
console.log(API_KEY);
const tourList = `http://apis.data.go.kr/B552584/UlfptcaAlarmInqireSvc/getUlfptcaAlarmInfo?year=2020&pageNo=1&numOfRows=12&returnType=json&serviceKey=${API_KEY}`;

async function runOk(position) {
  const lati = position.coords.latitude;
  const longi = position.coords.longitude;
  console.log(lati);
  console.log(longi);
  const weatherApiKey = "0cb7bf6dd6a2cd3aa583cb6e16fd0525";
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=${weatherApiKey}`;
  async function weatherApi() {
    const weatherResponse = await fetch(weatherUrl);
    console.log(weatherResponse);
    const weatherData = await weatherResponse.json();
    console.log(weatherData);
  }
  weatherApi();

  Abuton.addEventListener("click", showWeather);
  Bbuton.addEventListener("click", showCity);
  Cbuton.addEventListener("click", showC);
  const dataBox1 = document.createElement("div");
  dataBox1.classList.add("dataBox1");

  function showWeather(event) {
    event.preventDefault();
    Abuton.disabled = true;
    Cbuton.disabled = false;
    Bbuton.disabled = false;
    const kid = box.firstElementChild;

    Abuton.classList.add("clickButton");
    Cbuton.classList.remove("clickButton");
    Bbuton.classList.remove("clickButton");

    console.log(kid);
    if (kid) {
      box.replaceChild(dataBox1, kid);
      Abuton.disabled = true;
    } else {
      box.appendChild(dataBox1);
      Abuton.disabled = true;
    }

    async function insertApiData() {
      const tourResponse = await fetch(tourList);
      console.log(tourResponse);
      const tourData = await tourResponse.json();
      console.log(tourData);
      const tourLength = tourData.response.body.items.length;
      console.log(tourLength);
      const tourName = tourData.response.body.items;
      console.log(tourName);
      function makeListBox() {
        for (let i = 0; i < tourLength; i++) {
          const listBox = document.createElement("div");
          listBox.classList.add("listcover");
          const indexTourName = tourName[i].districtName;
          console.log(indexTourName);
          listBox.innerText = indexTourName;
          dataBox1.appendChild(listBox);
        }
      }
      makeListBox(tourLength);
    }
    insertApiData();
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
