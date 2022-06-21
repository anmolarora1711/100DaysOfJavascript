const number = document.querySelector(".number");
const generate = document.querySelector(".generate");

generate.addEventListener("click", (e) => {
    const randomNum = Math.floor((Math.random() * 1000) + 1);
    number.innerHTML = randomNum;
});