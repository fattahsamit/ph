const getAge = window.localStorage.getItem("age");
console.log(getAge);
const setAge = () => {
  localStorage.setItem("age", 24);
};
