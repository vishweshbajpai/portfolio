window.onscroll = () => {
    const scrollButton = document.getElementById("scrollButton");
    if(document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    }
    else {
        scrollButton.style.display = "none";
    }
}

const scrollClickHandler = () => {
    document.documentElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
