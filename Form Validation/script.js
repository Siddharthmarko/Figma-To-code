const pageTab = document.querySelectorAll(".tab");
const notificationList = document.querySelector(".error-list");
const notificationPage = document.querySelector(".showError");

pageTab.forEach((li) => {
    li.addEventListener("click", (e) => {

        if (pageTab[1] == li) {
            pageTab[0].classList.remove('active');
            pageTab[1].classList.add('active');
            signup.style.display = 'none';
            login.style.display = 'block';
        } else {
            login.style.display = 'none';
            signup.style.display = 'block';
            pageTab[1].classList.remove('active');
            pageTab[0].classList.add('active');
        }
        e.preventDefault(); 
    })
});

let creatingList = document.createElement('li');
const firstName = document.querySelector('.firstname');
const lastName = document.querySelector('.lastname');
const username = document.querySelector('.username');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const signUpbtn = document.querySelector('.signbtn');
const loginbtn = document.querySelector('.loginbtn');
const singUpData = document.querySelectorAll('#createData input');
const loginForm = document.querySelectorAll('#loginData input');
let accountCreated;
let obj = {};

loginbtn.addEventListener('click', function(e){
    notificationList.innerHTML = "";

    let itemExist = JSON.parse(sessionStorage.getItem(loginForm[0].value));
    console.log(itemExist);
    console.log(loginForm[1].value);
    if (itemExist != null &&
        itemExist.password == loginForm[1].value ){
            for(let prop in itemExist){
                let notificationText = itemExist[prop];
                createNotification(notificationText);
            }
    } 
    else {
            let notificationText = "wrong email and password"
            createNotification(notificationText)
    }

    toggleWindow();
    e.preventDefault();
});


signUpbtn.addEventListener('click', function (e) {
    
    notificationList.innerHTML = "";
    let nameSurname = `${firstName.value}${lastName.value}`;
    
    accountCreated = true;
    correctName(username.value, nameSurname);
    correctPassword(password.value);

    if (accountCreated) {
        successfullyCreated();
    } 
    toggleWindow();
    e.preventDefault(); 
});

let timerClear;
function toggleWindow(){
    clearTimeout(timerClear);
    notificationPage.classList.toggle('showError');
    timerClear = setTimeout(() => {
        notificationPage.classList.toggle('showError');
    }, 4000);    
}

function successfullyCreated(){
    let notificationText = `Successfuly Created`;
    createNotification(notificationText);

    for (let prop of singUpData) {
        obj[prop.className] = prop.value;
    }

    sessionStorage.setItem(obj.email, JSON.stringify(obj));
    console.log(obj);
    pageTab[0].classList.remove('active');
    pageTab[1].classList.add('active');
    signup.style.display = 'none';
    login.style.display = 'block';

}

function createNotification(error){
    let creatingList = document.createElement('li');
    creatingList.textContent = error;
    notificationList.appendChild(creatingList);
}

function lengthCheck(minLength, string, maxLength, type) {
    if (!(string.length >= minLength && string.length <= maxLength)) {
        accountCreated = false;
        let notificationText = `${ type } should have length ${ minLength } to ${ maxLength } character`;
        createNotification(notificationText);
    }
}

function correctName(username, nameSurname) {
    let containLetter = /^[a-zA-Z ]+$/;
    let containerNumberletter = /^[a-zA-Z0-9]+$/;

    lengthCheck(4, username, 12, "username");

    nameContain(containLetter, nameSurname, "first name & last name", "letter");
    nameContain(containerNumberletter, username, "username", "letter and digit");


    function nameContain(pattern, string, type, error) {
        if (!(pattern.test(string))) {
            accountCreated = false;
            let notificationText = `${ type } should containe only ${ error }`;
            createNotification(notificationText);
        } 
    }
}


function correctPassword(password){

    let validationCheck = true;
    const specialCharacter = /[!@#$%^&*()_+\-=\[\]{};:\'\",<.>/?]/;
    const uppercaseLetter = /.*[A-Z].*/;
    const lowercaseLetter = /.*[a-z].*/;
    const digit = /.*[0-9].*/;

    lengthCheck(8, password, 15, "password");

    atLeastHave(specialCharacter, "spacial character");
    atLeastHave(uppercaseLetter, "uppercase");
    atLeastHave(lowercaseLetter,"lowerCase");
    atLeastHave(digit,"digits");

    function atLeastHave(pattern, problem) {
        if (!(pattern.test(password))) {
            validationCheck = false;
            let notificationText = `Password should contain atleast one ${ problem } `;
            createNotification(notificationText);
        } 
    }

    if (!(validationCheck)){
        accountCreated = false;
    }
}







