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
        


document.getElementById("luna").addEventListener("click", darkmode);
document.getElementById("sol").addEventListener("click", darkmode);