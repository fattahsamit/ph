const loadData = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  fetch(url)
    .then((res) => res.json())
    .then((data) => showData(data))
    .catch((error) => console.log(error));
};

const showData = (data) => {
  //   console.log(data.slice(0, 5));
  const container = document.getElementById("post-info");
  for (const singleData of data) {
    console.log(singleData.title);
    const div = document.createElement("div");
    div.innerHTML = `
    <h1 class="text-2xl text-center">${singleData.title}</h1>
    `;
    container.appendChild(div);
  }
};

loadData();
