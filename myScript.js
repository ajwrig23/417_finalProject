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
    let myUl = document.querySelectorAll("ul");
    for(let el of myUl) {
        el.classList.toggle("night");
    }
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

//shoppingCart & checkout
let prod = {
    capButton: {
        price: 8750.00,
        name: "Welwalla Cap",
    },
    mugButton: {
        price: 4000.00,
        name: "MCRN Mug",
    },
    devilButton: {
        price: 9265.00,
        name: "Devil Pin",
    },
    protoButton: {
        price: 125000.00,
        name: "Protomolecule",
    },
    nukeButton: {
        price: 5000000.00,
        name: "UNN Nuke",
    }
};

let subTot = document.getElementById("subtotal");
let total = document.getElementById("total");
let itemList = document.getElementById("shopList");
let items = [];
let subTotalAmt = 0.00;
let totalPrice;
let itemOut = "";


function thouSep(x) {
    return x.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

function fillCart(e){
    console.log(e.target.id);
    let selection = e.target.id
    let itemLi = `<li>${prod[selection].name} ¥${thouSep(prod[selection].price)}</li>`
    // let itemPush = items.push(`<li>${prod[selection].name} ¥${prod[selection].price.toFixed(2)}</li>`);    
    if(itemOut.indexOf(itemLi) == -1) {
        itemOut += " " + itemLi;
    }
    itemList.innerHTML = itemOut;
    document.getElementById(selection).classList.add('hidden');
    subTotalAmt += prod[selection].price;
    console.log(subTotalAmt);
    totalPrice = subTotalAmt + (subTotalAmt * .127) + 100;
    console.log(totalPrice);
    subTot.innerHTML = `¥${thouSep(subTotalAmt)}`;
    total.innerHTML = `¥${thouSep(totalPrice)}`;
}
let capButt = document.getElementById("capButton");
let mugButt = document.getElementById("mugButton");
let devilButt = document.getElementById("devilButton");
let protoButt = document.getElementById("protoButton");
let nukeButt = document.getElementById("nukeButton");
let buttonList = [capButt, mugButt, devilButt, protoButt, nukeButt];
function resetProd(e) {
    for(let i of buttonList) {
        i.classList.remove("hidden");
    }
    if(e.target.id == "checkout") {
        if(totalPrice != 0){
            window.alert(`The shuttle with your selected items is being sent to your ship.
            Your account will be charged ¥${thouSep(totalPrice)}.
            Thank you and stay safe out there!`)
        }
    }
    itemOut = "";
    subTotalAmt = 0;
    totalPrice = 0
    subTot.innerHTML = "¥0.00";
    total.innerHTML = "¥0.00";
    itemList.innerHTML = "BIG EMPTY";
}
        

//darkmode button event listeners
document.getElementById("luna").addEventListener("click", darkmode);
document.getElementById("sol").addEventListener("click", darkmode);

//form submit/validation event listener
document.getElementById("formSubmit").addEventListener("click", formValidation);

//fillCart event listeners
document.getElementById("capButton").addEventListener("click", fillCart);
document.getElementById("mugButton").addEventListener("click", fillCart);
document.getElementById("devilButton").addEventListener("click", fillCart);
document.getElementById("protoButton").addEventListener("click", fillCart);
document.getElementById("nukeButton").addEventListener("click", fillCart);

//resetProd listeners
document.getElementById("checkout").addEventListener("click", resetProd);
document.getElementById("clear").addEventListener("click", resetProd);
