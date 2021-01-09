//Getting the document objects
const username = document.querySelector("#name");
const address = document.querySelector("#address");
const email = document.querySelector("#email");
const number = document.querySelector("#number");
const password = document.querySelector("#password");
const usernameIcon = document.querySelector("#name-icon");
const addressIcon = document.querySelector("#address-icon");
const emailIcon = document.querySelector("#email-icon");
const numberIcon = document.querySelector("#number-icon");
const passwordIcon = document.querySelector("#password-icon");
const submit = document.querySelector("#submit");
const great = document.querySelector(".great");
const grayedout = document.querySelector(".gray");
const spanone = document.querySelector("#spanone");
const spantwo = document.querySelector("#spantwo");
const spanthree = document.querySelector("#spanthree");
const settingUp = document.querySelector(".setting-up");
const done = document.querySelector(".done");
//End of the codes getting the document objects

//variables
let namevalue;
let addressvalue;
let emailvalue;
let passwordvalue;
let numbervalue;
let loader = 1;
let toDone = 0;
//End of variables

//FUNCTIONS ZONE
const getValue = (inputf) => {
  return inputf.value;
};
const valueRight = (icon, check) => {
  if (check === undefined || check === "") {
    icon.classList.add("incorrect");
    icon.classList.remove("correct");
  } else {
    icon.classList.add("correct");
    icon.classList.remove("incorrect");
  }
};
const lastToEnableSubmit = () => {
  if (namevalue === undefined || namevalue === "") {
    address.disabled = true;
    email.disabled = true;
    number.disabled = true;
    password.disabled = true;
    submit.disabled = true;
  } else {
    address.disabled = false;
    email.disabled = true;
    number.disabled = true;
    password.disabled = true;
    submit.disabled = true;
  }
  if (addressvalue === undefined || addressvalue === "") {
    email.disabled = true;
    number.disabled = true;
    password.disabled = true;
    submit.disabled = true;
  } else {
    email.disabled = false;
    number.disabled = true;
    password.disabled = true;
    submit.disabled = true;
  }
  if (emailvalue === undefined || emailvalue === "") {
    number.disabled = true;
    password.disabled = true;
    submit.disabled = true;
  } else {
    number.disabled = false;
    password.disabled = true;
    submit.disabled = true;
  }
  if (numbervalue === undefined || numbervalue === "") {
    password.disabled = true;
    submit.disabled = true;
  } else {
    password.disabled = false;
    submit.disabled = true;
  }
};
lastToEnableSubmit();

const leastToEnableSubmit = () => {
  if (
    passwordvalue === undefined ||
    passwordvalue === "" ||
    passwordvalue.length < 8
  ) {
    submit.disabled = true;
    great.style.opacity = 0;
  } else {
    submit.disabled = false;
    great.style.opacity = 0.9;
  }
};
const showPassword = () => {
  console.log(namevalue);
  console.log(addressvalue);
  console.log(emailvalue);
  console.log(numbervalue);
  console.log(passwordvalue);
};
const addingColorToCycle = () => {
  switch (loader) {
    case 1:
      spanone.style.backgroundColor = "transparent";
      spantwo.style.backgroundColor = "#000";
      spanthree.style.backgroundColor = "#000";
      break;
    case 2:
      spanone.style.backgroundColor = "#000";
      spantwo.style.backgroundColor = "transparent";
      spanthree.style.backgroundColor = "#000";
      break;
    default:
      spanone.style.backgroundColor = "#000";
      spantwo.style.backgroundColor = "#000";
      spanthree.style.backgroundColor = "transparent";
  }
};
const forDone = () => {
  if (toDone < 12) {
    done.style.display = "none";
  } else {
    settingUp.style.display = "none";
    done.style.display = "flex";
  }
};
forDone();
const looploader = () => {
  if (loader === 3) {
    loader = 0;
  } else {
    loader += 1;
    toDone += 1;
  }
  forDone();
  addingColorToCycle();

  var t = setTimeout(looploader, 1000);
};

const stylingModal = () => {
  grayedout.style.display = "block";
};

//END OF THE FUNCTION ZONE

//ADDING EVENT LISTENER STARTS BELOW
username.addEventListener("input", () => {
  namevalue = getValue(username);
  valueRight(usernameIcon, namevalue);
  lastToEnableSubmit();
});
address.addEventListener("input", () => {
  addressvalue = getValue(address);
  valueRight(addressIcon, addressvalue);
  lastToEnableSubmit();
});
email.addEventListener("input", () => {
  emailvalue = getValue(email);
  valueRight(emailIcon, emailvalue);
  lastToEnableSubmit();
});
number.addEventListener("input", () => {
  numbervalue = getValue(number);
  valueRight(numberIcon, numbervalue);
  lastToEnableSubmit();
});

password.addEventListener("input", () => {
  passwordvalue = getValue(password);
  valueRight(passwordIcon, passwordvalue);
  leastToEnableSubmit();
});
submit.addEventListener("click", () => {
  stylingModal();
  showPassword();
  looploader();
});
//ADDING EVENT LISTENER ENDS HERE
