// console.log("meme");
// // https://meme-api.com/gimme/20

const loadMeme = () => {
  const URL = "https://meme-api.com/gimme/20";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => showMeme(data.memes))
    .catch((error) => console.log(error));
};

const showMeme = (memes) => {
  const memeContainer = document.getElementById("section");
  memes.slice(0, 6).forEach((meme) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="card w-full glass shadow-2xl">
      <figure>
        <img class="w-full h-64" src="${meme.url}" alt="car!"/>
      </figure>
    </div>
    `;
    memeContainer.appendChild(div);
  });
};

loadMeme();
