window.onscroll = () => {
  const scrollButton = document.getElementById("scrollButton");
  if (document.documentElement.scrollTop > 200) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
};

const scrollClickHandler = () => {
  document.documentElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const dangerColor = "#dc3545";
const defaultColor = "#ced4da";

const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");

let formIsValid = false,
  nameIsValid = false,
  emailIsValid = false,
  phoneIsValid = false;

const nameInputHandler = () => {
  if (!validateName(name.value)) {
    nameError.innerText = "Please enter a valid name";
    name.style.borderColor = dangerColor;
    nameIsValid = false;
  } else {
    nameError.innerText = "";
    name.style.borderColor = defaultColor;
    nameIsValid = true;
  }
};

const emailInputHandler = () => {
  if (!validateEmail(email.value)) {
    emailError.innerText = "Please enter a valid email";
    email.style.borderColor = dangerColor;
    emailIsValid = false;
  } else {
    emailError.innerText = "";
    email.style.borderColor = defaultColor;
    emailIsValid = true;
  }
};

const phoneInputHandler = () => {
  if (!validatePhone(phone.value)) {
    phoneError.innerText = "Please enter a valid number";
    phone.style.borderColor = dangerColor;
    phoneIsValid = false;
  } else {
    phoneError.innerText = "";
    phone.style.borderColor = defaultColor;
    phoneIsValid = true;
  }
};

const footerFormSubmitHandler = () => {
  window.event.preventDefault();

  if (nameIsValid && emailIsValid && phoneIsValid) {
    formIsValid = true;
  }

  if (formIsValid) {
    const toastLiveExample = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
    name.value = "";
    email.value = "";
    phone.value = "";
    description.value = "";
  } else {
    nameInputHandler();
    emailInputHandler();
    phoneInputHandler();
  }
};

const validateName = (nameValue) => {
  if (nameValue.trim().length == 0 || /[^a-zA-Z ]/.test(nameValue)) {
    return false;
  }
  return true;
};

const validateEmail = (emailValue) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue)) {
    return true;
  }
  return false;
};

const validatePhone = (phoneValue) => {
  if (phoneValue.trim().length == 0 || /[^0-9+ ]/.test(phoneValue)) {
    return false;
  }
  return true;
};
