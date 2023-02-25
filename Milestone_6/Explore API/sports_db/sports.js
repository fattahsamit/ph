const searchAllData = () => {
  const inputElement = document.getElementById("search-value");
  const inputValue = inputElement.value;
  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showPlayerData(data.player));
};

const showPlayerData = (players) => {
  const container = document.getElementById("player-info");

  players.forEach((player) => {
    console.log(player);
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
      <div class="card">
          <img src="${player.strThumb}" class="card-img-top" alt="${player.strPlayer}">
          <div class="card-body">
            <h5 class="card-title">${player.strPlayer}</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      `;
    container.appendChild(div);
  });
};

// searchAllData();
