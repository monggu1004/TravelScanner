const bars = document.querySelector(".fa-bars");
const header = document.querySelector("header");
const menubox = document.createElement("div");
menubox.classList.add("menubox");
header.appendChild(menubox);
menubox.classList.add("hidden");

function openmenu() {
  menubox.classList.toggle("hidden");
}

async function api() {
  const data = await fetch(
    "https://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=2IH5PyYaWE%2FpKFRNC0FqAUfRHJj091EvFJGNV7wdtf35vQq0QILwUk7jFssn%2BR0DaSnXlMC55OE8mZtbRorVSA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=126.981611&mapY=37.568477&radius=1000&contentTypeId=15"
  );
  console.log(data);
  const date2 = await data.json();
  console.log(date2);
}
api();
bars.addEventListener("click", openmenu);
