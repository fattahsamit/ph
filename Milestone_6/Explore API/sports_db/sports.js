const searchAllData = () => {
  const inputElement = document.getElementById("search-value");
  const inputValue = inputElement.value;
  const URL = `https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${inputValue}`;
  fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log(data.player));
};

// searchAllData();
