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

const footerFormSubmitHandler = () => {
  window.event.preventDefault();
  const form = document.getElementById("footerForm");
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const description = document.getElementById("description");
  if (!form.checkValidity()) {
    form.classList.add("was-validated");
  } else {
    const toastLiveExample = document.getElementById("liveToast");
    const toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
    name.value = "";
    email.value = "";
    phone.value = "";
    description.value = "";
    form.classList.remove("was-validated");
  }
};

const SendClickHandler = () => {
  
};
