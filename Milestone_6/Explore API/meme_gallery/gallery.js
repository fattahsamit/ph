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
  console.log(memes);
};

loadMeme();
