const num = document.querySelectorAll("div");
const input = document.querySelector(".input");
const result = document.querySelector(".equal");

num.forEach((div) => {
    div.addEventListener("click", function (event) {
        let inputText = input.innerHTML;
        let word = "+-*/.";
        let notAllow = "*/";
        let text = div.textContent;
        if (inputText == "" && notAllow.includes(text)){
            console.log("yaha");
            text = "";
        }
        if (text != "=" && text.length <= 1){
            if(!word.includes(inputText[inputText.length-1]) || text <= 9 ) {
                input.innerHTML += text;
            }
        }
        if(text == "C" ){
            input.innerHTML = "";
            console.clear();
        }
        event.stopPropagation()
    })
});

result.addEventListener("click", function () {
    let numbers = input.textContent;
    let result = eval(numbers);
    input.innerHTML = result;
});