let btn1 = document.getElementById("myButton");
let btn2 = document.getElementById("myButton2");
let copyDiv = document.querySelector(".copyCode");

// const bgChanger = (color1, color2) => {
//     document.body.style.backgroundImage= `linear-gradient(to right, ${color1}, ${color2})`;
//     copyDiv.innerHTML = `background-image: linear-gradient(to right, ${color1}, ${color2});`;
//     btn1.innerText = color1;
//     btn2.innerText = color2;
// };
 let rgb1 = "#92d768";
 let rgb2 = "#c2ddc9";

const hexValues =() => {
    let myHexValues = "0123456789abcdef";
    let colors = "#";
    for (let i = 0; i < 6; i++) {
        colors += myHexValues[Math.floor(Math.random() * 16)];
    }
    return colors;
}

const handleButton1 = () => {
   rgb1 = hexValues();
   document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1}, ${rgb2})`;
   copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
   btn1.innerText = rgb1;  
};


const handleButton2 = () => {
    rgb2 = hexValues();
    document.body.style.backgroundImage= `linear-gradient(to right, ${rgb1}, ${rgb2})`;
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2});`;
    btn2.innerText = rgb2;

}

btn1.addEventListener("click", handleButton1);
btn2.addEventListener("click", handleButton2);
copyDiv.addEventListener("click", () => {
    navigator.clipboard.writeText(copyDiv.innerText);
    alert(`Copied the text: ${copyDiv.innerText}`);
});