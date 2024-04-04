const names = document.getElementById("usersName");
const errorName = document.getElementById("errorName");
var checkName = false;

function handleNameChange() {
  if (names.value === "") {
    errorName.innerHTML = "Name can not empty";
    errorName.style.color = "red";
    checkName = false;
  } else if (names.value.length < 8) {
    errorName.innerHTML = "Name's length must more than 8 character";
    errorName.style.color = "red";
    checkName = false;
  } else if (names.value == usersName.value.toLowerCase()) {
    errorName.innerHTML = "Name must have uppercase character";
    errorName.style.color = "red";
    checkName = false;
  } else {
    errorName.innerHTML = "";
    checkName = true;
  }
}

const password = document.getElementById("password");
const errorPass = document.getElementById("errorPass");
var checkPass = false;
function handlePassChange() {
  if (password.value === "") {
    errorPass.innerHTML = "Pass can not empty";
    errorPass.style.color = "red";
    checkPass = false;
  } else if (password.value.length < 8) {
    errorPass.innerHTML = "Password's length must more than 8 character";
    errorPass.style.color = "red";
    checkPass = false;
  } else if (password.value == password.value.toLowerCase()) {
    errorPass.innerHTML = "Password must have uppercase character";
    errorPass.style.color = "red";
    checkPass = false;
  } else {
    errorPass.innerHTML = "";
    checkPass = true;
  }
}

const confirmPass = document.getElementById("confirmPass");
const errorConfirm = document.getElementById("errorConfirm");
var checkConfirm = false;
function enterConfirm() {
  if (confirmPass.value != password.value) {
    errorConfirm.innerHTML = "Can't different";
    errorConfirm.style.color = "red";
    checkConfirm = false;
  } else {
    errorConfirm.innerHTML = "";
    checkConfirm = true;
  }
}

const users = [];
function handleSubmit(event) {
  event.preventDefault(); //ngan can hanh dong mac dinh
  const newUser = {
    usersName: names.value,
    usersPassword: password.value,
    usersConfirm: confirmPass.value,
  };
  users.push(newUser);
  console.log("new user", newUser);
}

const Users = [];
function handleSubmit(event) {
  event.preventDefault();
  if (checkConfirm && checkName && checkPass) {
    // errorName.value === "" &&
    // errorPass.value === "" &&
    // errorConfirm.value === "" &&
    // errorEmail.value === ""
    const newUser = {
      usersName: inpName.value,
      usersEmail: inpPass.value,
      usersPassword: inpEmail.value,
    };
    Users.push(newUser);
    console.log("new users", Users);
  } else {
    console.log("xxx");
  }
}

let newUser = {
  id: Math.floor(Math.random() * 1000),
  name: inpName.value,
  email: inpEmail.value,
  pass: inpPassword.value,
};

let index = Users.findIndex((Users) => Users.email === inpEmail.value);
if (index === -1) {
  Users.push(newUser);
  console.log(newUser);
  alert("dang ki tk thanh cong!");
} else {
  alert("Email da ton tai trong he thong, ban k the dang ki nua");
}

// let index2 = Users.findIndex((Users) => Users.name === inpName.value);
// if (index === -1) {
//   Users.push(newUser);
// }
