const searchAllData = () => {
  const inputElement = document.getElementById("search-value");
  const inputValue = inputElement.value;
  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showPlayerData(data.player));
};

const showPlayerData = (players) => {
  document.getElementById("search-value").value = "";
  const container = document.getElementById("player-info");
  container.innerHTML = "";
  players.forEach((player) => {
    console.log(player);
    const { strThumb, strPlayer, strNationality } = player;
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
    <div class="card">
        <img src="${
          strThumb ? strThumb : "https://picsum.photos/500/300?random=3"
        }" class="card-img-top" alt="${strPlayer}">
        <div class="card-body">
            <h5 class="card-title">${strPlayer}</h5>
            <p class="card-text">Nationality: ${strNationality}</p>
            <div>
            <button type="button" class="btn btn-primary">Details</button>
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
      `;
    container.appendChild(div);
  });
};

// searchAllData();
