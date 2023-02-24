const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  const genderTag = document.getElementById("gender");
  genderTag.innerText = user.results[0].gender;

  const nameTag = document.getElementById("name");
  const fullName = user.results[0].name.first + " " + user.results[0].name.last;
  nameTag.innerText = fullName;

  const countryTag = document.getElementById("country");
  countryTag.innerText = user.results[0].location.country;
};

loadUser();
