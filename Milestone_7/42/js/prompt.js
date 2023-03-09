const getAlert = () => {
  alert("Welcome");
};

const getConfirm = () => {
  const answer = confirm("Will you give cookies?");
  if (answer) {
    alert("Thanks");
  } else {
    console.log(":/");
  }
};

const getInput = () => {
  const name = prompt("What is your name?");
  if (name) {
    alert("Welcome " + name);
  } else {
    alert("Go away man with no name!");
  }
};
