const earth = document.querySelector(".fa-earth-asia");

const mapkey = "9ccf3d71552078b76c1c263262029bcb";
async function openMap() {
  const addmapbox = document.createElement("div");
  addmapbox.classList.add("mapdesign");

  const mapurl = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${mapkey}`;

  const bringmap = await fetch(mapurl).then((response) => response.json());
  console.log(bringmap);
}

earth.addEventListener("click", openMap);
