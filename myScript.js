//set use strict for entire script
"use strict";

//darkmode

//define function for when sun or moon button clicked
function darkmode(){
    //select all section elements
    let myEls = document.querySelectorAll("section");
    //for loop to iterate through array of section elements
    for(let el of myEls) {
        //toggle the .night class for each section element
        el.classList.toggle("night");
    }
    //select all figcaption elem
    let myfcs = document.querySelectorAll("figcaption");
    // for loop to iterate through array of figcaption elements
    for(let el of myfcs) {
        //toggle the .night class for each figcaption element 
        el.classList.toggle("night");
    }
    //select all figure elements
    let myfigs = document.querySelectorAll("figure");
    //for loop to iterate through array of figure elements
    for(let el of myfigs) {
        //toggle .night class for each figure element
        el.classList.toggle("night");
    }
    //select all ul elements
    let myUl = document.querySelectorAll("ul");
    //for loop to iterate through array of ul elements
    for(let el of myUl) {
        //toggle .night class for each ul element
        el.classList.toggle("night");    
    }
    //toggle .hidden class for the day/night buttons. Day hidden by default on page load.
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

//define form validation function
function formValidation(e){
    //prevent validation from occurring until button clicked
    e.preventDefault();
    //defin errCount it will be used as check for success message
    let errCount = 0
    //validate name input

    //if name does not have a value, remove the hidden class from the error span, display the message in that span, and add 1 to errCount
    if(!fname.value) {
        nmErr.classList.remove("hidden");
        nmErr.innerHTML = "Your full name is required.";
        errCount++;
    //if name value does not contain a space and at least two characters for BOTH first and last name, remove the hidden class from the error span, display the message in that span, and add 1 to errCount
    }else if(!nameRe.test(fname.value)) {
        nmErr.classList.remove("hidden");
        nmErr.innerHTML = "Please enter both a first and last name."; 
        errCount++;
    //if name has a value and it passes the regex test hide the error span by adding the hidden class     
    }else{
        nmErr.classList.add("hidden");
    }
    //validate phone input
    //if phone does not have a value, remove the hidden class from the error span, display the message in that span, and add 1 to errCount
    if(!pNum.value){
        phErr.classList.remove("hidden");
        phErr.innerHTML = "Your phone number is required.";
        errCount++;
    //if phone number does not pass regex test (10 digits or 10 digits with parentheses, dashes, spaces in the appropriate places), remove the hidden class from the error span, display the message in that span, and add 1 to errCount
    }else if(!phoneRe.test(pNum.value)) {
        phErr.classList.remove("hidden");
        phErr.innerHTML = "Please enter a 10 digit phone number.";
        errCount++;
    //if phone has a value and it passes the regex test hide the error span by adding the hidden class
    }else {
        phErr.classList.add("hidden");
    }
    //validate email input
    //if email does not have a value, remove the hidden class from the error span, display the message in that span, and add 1 to errCount
    if(!email.value){
        emErr.classList.remove("hidden");
        emErr.innerHTML = "Your email is required.";
        errCount++;
    //if email value fails regex test, remove the hidden class from the error span, display the message in that span, and add 1 to errCount
    }else if(!emailRe.test(email.value)) {
        emErr.classList.remove("hidden");
        emErr.innerHTML = "Please enter a valid email address.";
        errCount++;
    //if email has a value and it passes the regex test hide the error span by adding the hidden class
    }else {
        emErr.classList.add("hidden");
    }
    //validate comments input
    //if comments has no value,  remove the hidden class from the error span, display the message in that span, and add 1 to errCount
    if(!comms.value) {
        comErr.classList.remove("hidden");
        comErr.innerHTML = "Comments are required.";
        errCount++;
    //if comments has any input, hide the error span by adding the hidden class
    }else {
        comErr.classList.add("hidden");
    }
    //validate radio input
    //if both radio choices are unchecked, remove the hidden class from the error span, display the message in that span, and add 1 to errCount
    if(!eChoice.checked && !pChoice.checked) {
        chErr.classList.remove("hidden");
        chErr.innerHTML = "A contact method must be selected.";
        errCount++;
    //if a radio choice is selected, hide the error span by adding the hidden class
    }else {
        chErr.classList.add("hidden")
    }
    //if errCount ==0 the form validated, a message will be displayed and other products become visible
    if(errCount == 0) {
        //define str variable as empty string, value will be determined by if else statement
        let str = "";
        //if email is checked the email is populated in the str variable
        if(eChoice.checked) {
            str = `Oye ${fname.value}, you have been granted access to exclusive products!<br> We will email you at ${email.value} to let you know when new items are available.<br><a href="#products">Go Back To Current Stock</a>`;
        //else the phone number is populated in the str variable
        }else {
            str = `Oye ${fname.value}, you have been granted access to exclusive products!<br> We will text you at ${pNum.value} to let you know when new items are available.<br><a href="#products">Go Back To Current Stock</a>`;
        }
        //hide the classified divs and display the exclusive products
        tSecOne.classList.add("hidden");
        tSecTwo.classList.add("hidden");
        proto.classList.remove("hidden");
        nuke.classList.remove("hidden");
        //show the message element for successful form validation
        valForm.classList.remove("hidden");
        //populate the message element with the str variable from the conditional statement above
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
//define map object for the products with product name and price values for each button id key
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

//define variables to access elements
let subTot = document.getElementById("subtotal");
let total = document.getElementById("total");
let itemList = document.getElementById("shopList");

//define subTotal and total variables as 0 and empty string for itemOut
let subTotalAmt = 0;
let totalPrice = 0;
let itemOut = "";


//define function to format number with thousands separators for US locale, also formats numbers to include no less or more than two decimal places
function thouSep(x) {
    return x.toLocaleString("en-US", {minimumFractionDigits: 2, maximumFractionDigits: 2});
}

//define the function that populates the item list in the cart element and calculates and displays sub totals and totals
function fillCart(e){
    //display event target id in the console, used for debugging
    console.log(e.target.id);
    //define selection variable with event target id
    let selection = e.target.id
    //define itemLi with a template literal using the selection variable (event target id) as the key to return the name and price values for the selected product
    let itemLi = `<li><strong>${prod[selection].name}</strong><br>¥${thouSep(prod[selection].price)}</li>`
    //check if the item is already in the itemLi string using index of with a value of -1 (no match)
    if(itemOut.indexOf(itemLi) == -1) {
        //if the value does not exist in the string add itemLi to the string
        itemOut += itemLi;
    }
    //use innerHTML to display the string in the cart ul so the <li> tags are respected
    itemList.innerHTML = itemOut;
    //use the selection variable to add the hidden class to the event target button
    document.getElementById(selection).classList.add('hidden');
    //define and calculate sub total by adding the price value of the selection key to subTotalAmt
    subTotalAmt += prod[selection].price;
    //display subTotalAmt in console for debugging
    console.log(subTotalAmt);
    //define totalPrice by calculating the subtotal + sub total * tax rate (in decimal) + shipping (flat 100)
    totalPrice = subTotalAmt + (subTotalAmt * .127) + 100;
    //display totalPrice in console for debugging
    console.log(totalPrice);
    //template literal to populate the subtotal cost elements displaying the output of the subtotal and total values passed to the thouSep function above
    subTot.innerHTML = `¥${thouSep(subTotalAmt)}`;
    total.innerHTML = `¥${thouSep(totalPrice)}`;
}

//define variables to select all the product buttons
let capButt = document.getElementById("capButton");
let mugButt = document.getElementById("mugButton");
let devilButt = document.getElementById("devilButton");
let protoButt = document.getElementById("protoButton");
let nukeButt = document.getElementById("nukeButton");
//add all the product buttons to an array
let buttonList = [capButt, mugButt, devilButt, protoButt, nukeButt];

//define function to reset all the product buttons, 0 out total and subtotal, and clear the item list if checkout completed or cart is cleared. If checkout is completed an alert message is displayed
function resetProd(e) {
    //iterate through each item of the buttonList array
    for(let i of buttonList) {
        //remove hidden class from each button
        i.classList.remove("hidden");
    }
    //check if event target was the checkout button (send to ship)
    if(e.target.id == "checkout") {
        //check if the total is greater than display an alert message with the output of the totalPrice formatted with thouSep in template literal
        if(totalPrice > 0){
            window.alert(`The shuttle with your selected items is being sent to your ship.
            Your account will be charged ¥${thouSep(totalPrice)}.
            Thank you and stay safe out there!`)
        }
    }
    //reset cart defaults
    //clear the item list
    itemOut = "";
    //set subtotal and total to 0
    subTotalAmt = 0;
    totalPrice = 0;
    //set default span content for subtotal and total
    subTot.innerHTML = "¥0.00";
    total.innerHTML = "¥0.00";
    //display Big Empty in item list
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
