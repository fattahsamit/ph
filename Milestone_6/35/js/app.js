const loadPhones = async (searchText) => {
  const URL = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);
};

loadPhones("iphone");
