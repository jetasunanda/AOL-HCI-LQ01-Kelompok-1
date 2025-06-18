const searchSims = document.querySelector("#search-sims");

searchSims.addEventListener("keyup", searchingSims);

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const searchQuery = getQueryParam("q");

function searchingSimsNav(targetSims) {
  let simsCard = document.querySelectorAll(".simulation-card");

  simsCard.forEach((item) => {
    const simsTitle = item
      .querySelector(".sim-title")
      .textContent.toLowerCase();

    if (simsTitle.indexOf(targetSims) != -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none !important;");
    }
  });
}

if (searchQuery !== null) {
  console.log(searchQuery);
  searchingSimsNav(searchQuery);
}

function searchingSims(e) {
  const searchSims = e.target.value.toLowerCase();
  let simsCard = document.querySelectorAll(".simulation-card");

  simsCard.forEach((item) => {
    const simsTitle = item
      .querySelector(".sim-title")
      .textContent.toLowerCase();

    if (simsTitle.indexOf(searchSims) != -1) {
      item.setAttribute("style", "display: block;");
    } else {
      item.setAttribute("style", "display: none !important;");
    }
  });
}
