const searchAllData = () => {
  const inputElement = document.getElementById("search-value");
  const inputValue = inputElement.value;
  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showPlayerData(data.player))
    .catch((error) => console.log(error));
};

const showPlayerData = (players) => {
  document.getElementById("search-value").value = "";
  const container = document.getElementById("player-info");
  container.innerHTML = "";
  players.forEach((player) => {
    // console.log(player);
    const { strThumb, strPlayer, strNationality, idPlayer } = player;
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
            <button onclick="singlePlayer('${idPlayer}')" type="button" class="btn btn-primary">Details</button>
            <button type="button" class="btn btn-danger">Delete</button>
            </div>
        </div>
    </div>
      `;
    container.appendChild(div);
  });
};

const singlePlayer = (id) => {
  const URL = `https://www.thesportsdb.com/api/v1/json/3/lookupplayer.php?id=${id}
    `;
  //   console.log(URL);
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showSinglePlayer(data.players[0]))
    .catch((error) => console.log(error));
};

const showSinglePlayer = (data) => {
  const { strThumb, strPlayer, strDescriptionEN } = data;
  const container = document.getElementById("single-player-details");
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="card mb-3" w-100 h-100;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${strThumb}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${strPlayer}</h5>
                    <p class="card-text">${
                      strDescriptionEN.slice(0, 180) + "..."
                    }</p>
                </div>
            </div>
        </div>
    </div>
  `;
  container.appendChild(div);
};

// searchAllData();
