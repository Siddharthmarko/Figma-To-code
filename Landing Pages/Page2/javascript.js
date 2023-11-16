const nav = document.querySelector('.nav'); 
document.addEventListener("click",(event) =>{
    const classList = event.target.classList;
    if (classList.contains("fa-solid")){
        nav.classList.toggle('toggle');
    }
    if (classList == "to-Section"){
        let name = event.target.textContent;
        name = name.toLowerCase();
        let element = document.getElementById(name);
        element.scrollIntoView({ 
            behavior: "smooth" 
        });
        console.log(name);
    }
    console.log("REACH TO THE END");
})

