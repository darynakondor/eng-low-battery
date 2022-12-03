const telephone = document.getElementById("tel");
button = document.getElementById("btn");
errorMessage = document.querySelector(".main__message");

if (telephone.value !== "+(381) ___-___-__") {
  button.classList.add("press");
}
button.addEventListener("click", () => {
  if (telephone.value == "+38111111111") {
    window.open("pin.html");
    errorMessage.classList.add("hiden");
    telephone.classList.remove("error");
  }
  if (telephone.value == "+38000000000") {
    errorMessage.classList.remove("hiden");
    telephone.classList.add("error");
  }
});
