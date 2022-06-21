const color = document.querySelector(".color");
const generateBtn = document.querySelector(".generate");

generateBtn.addEventListener("click", () => {
    const hexDigits = [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
    let hexColor = "#";
    for (let count = 0; count < 6; count++) {
        const randomNum = Math.floor(Math.random() * hexDigits.length);
        hexColor += hexDigits[randomNum];
    }
    color.innerHTML = hexColor;
    document.querySelector("body").style.backgroundColor = hexColor;
    document.querySelector(".generate").style.color = hexColor;
    document.querySelector("hr").style.backgroundColor = hexColor;
    document.querySelector(".color-div h1").style.color = hexColor;
    document.querySelector(".color").style.color = hexColor;

});