const getAge = window.localStorage.getItem("age");
console.log(getAge);
const setAge = () => {
  const age = localStorage.setItem("age", 24);
};
