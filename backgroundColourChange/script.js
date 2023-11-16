
const btn = document.querySelector("button");
const body = document.querySelector("body");

function random(){
    return Math.floor(Math.random() * 255);
}
btn.addEventListener("click", function () {     
    document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()})`;
})