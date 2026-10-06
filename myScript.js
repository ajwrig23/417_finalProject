//set use strict for entire script
"use strict";

//darkmode
function darkmode(){

    let myEls = document.querySelectorAll("section");
    for(let el of myEls) {
        el.classList.toggle("night");
    }
    let myfcs = document.querySelectorAll("figcaption");
    for(let el of myfcs) {
        el.classList.toggle("night");
    }
    let myfigs = document.querySelectorAll("figure");
    for(let el of myfigs) {
        el.classList.toggle("night");
    }
    document.getElementById("luna").classList.toggle("hidden");
    document.getElementById("sol").classList.toggle("hidden");
}

//form validation
//define variables of elements to validate
let fname = document.getElementById("fname");
let pNum = document.getElementById("pnum");
let email = document.getElementById("email");
let comms = document.getElementById("comments");
let pChoice = document.getElementById("phonechoice");
let eChoice = document.getElementById("emailchoice");

//define regex variables
let nameRe = /^[A-Za-z]{2,}\s[A-Za-z]{2,}$/;
let phoneRe = /^\(?[0-9]{3}[\)\s-.]?[0-9]{3}[\s-.]?[0-9]{4}$/;
let emailRe = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;

//define variables for error spans per input
let nmErr = document.getElementById("nameError");
let phErr = document.getElementById("phoneError");
let emErr = document.getElementById("emailError");
let comErr = document.getElementById("commentError");
let chErr = document.getElementById("contactError");
let valForm = document.getElementById("validForm");

//define variables of "product" elements that will be hidden or visible if form validates
let proto = document.getElementById("protomolecule");
let nuke = document.getElementById("nucular");
let tSecOne = document.getElementById("tsone");
let tSecTwo = document.getElementById("tstwo");
function formValidation(e){
    e.preventDefault();
    //errCount will be used as check for success message
    let errCount = 0
    //validate name input
    if(!fname.value) {
        nmErr.classList.remove("hidden");
        nmErr.innerHTML = "Your full name is required.";
        errCount++;
    }else if(!nameRe.test(fname.value)) {
        nmErr.classList.remove("hidden");
        nmErr.innerHTML = "Please enter both a first and last name."; 
        errCount++;       
    }else{
        nmErr.classList.add("hidden");
    }
    //validate phone input
    if(!pNum.value){
        phErr.classList.remove("hidden");
        phErr.innerHTML = "Your phone number is required.";
        errCount++;
    }else if(!phoneRe.test(pNum.value)) {
        phErr.classList.remove("hidden");
        phErr.innerHTML = "Please enter a 10 digit phone number.";
        errCount++;
    }else {
        phErr.classList.add("hidden");
    }
    //validate email input
    if(!email.value){
        emErr.classList.remove("hidden");
        emErr.innerHTML = "Your email is required.";
        errCount++;
    }else if(!emailRe.test(email.value)) {
        emErr.classList.remove("hidden");
        emErr.innerHTML = "Please enter a valid email address.";
        errCount++;
    }else {
        emErr.classList.add("hidden");
    }
    //validate comments input
    if(!comms.value) {
        comErr.classList.remove("hidden");
        comErr.innerHTML = "Comments are required.";
        errCount++;
    }else {
        comErr.classList.add("hidden");
    }
    //validate radio input
    if(!eChoice.checked && !pChoice.checked) {
        chErr.classList.remove("hidden");
        chErr.innerHTML = "A contact method must be selected.";
        errCount++;
    }else {
        chErr.classList.add("hidden")
    }
    //if errCount ==0 the form validated, a message will be displayed and other products become visible
    if(errCount == 0) {
        let str = "";
        if(eChoice.checked) {
            str = `Oye ${fname.value}, you have been granted access to exclusive products!<br> We will email you at ${email.value} to let you know when new items are available.<br><a href="#products">Go Back To Current Stock</a>`;
        }else {
            str = `Oye ${fname.value}, you have been granted access to exclusive products!<br> We will text you at ${pNum.value} to let you know when new items are available.<br><a href="#products">Go Back To Current Stock</a>`;
        }
        tSecOne.classList.add("hidden");
        tSecTwo.classList.add("hidden");
        proto.classList.remove("hidden");
        nuke.classList.remove("hidden");
        valForm.classList.remove("hidden");
        valForm.innerHTML = str;
    }else {
        //if user submits a new non valid form the product section resets until valid form is submitted
        tSecOne.classList.remove("hidden");
        tSecTwo.classList.remove("hidden");
        proto.classList.add("hidden");
        nuke.classList.add("hidden");
        valForm.classList.add("hidden"); 
    }
}
        

//darkmode button event listeners
document.getElementById("luna").addEventListener("click", darkmode);
document.getElementById("sol").addEventListener("click", darkmode);

//form submit/validation event listener
document.getElementById("formSubmit").addEventListener("click", formValidation);

