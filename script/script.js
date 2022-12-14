const telephone = document.getElementById("tel");
button = document.getElementById("btn");
errorMessage = document.querySelector(".main__message");

telephone.oninput = function () {
    telephone.value.length == 12 ? button.classList.add("press") : button.classList.remove("press");
    if (telephone.value == "+38000000000") {
        errorMessage.classList.remove("hiden");
        telephone.classList.add("error");
        button.classList.remove("press");
    }
    else if (telephone.value.length < 12) {
        errorMessage.classList.add("hiden");
        telephone.classList.remove("error");
    }
};

button.addEventListener("click", () => {
    if (telephone.value == "+38111111111") {
        window.open("pin.html");
        errorMessage.classList.add("hiden");
        telephone.classList.remove("error");
        button.classList.remove("press");
    }
});
