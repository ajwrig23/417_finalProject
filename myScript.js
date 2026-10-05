//set use strict for entire script
"use strict";

//darkmode
function darkmode(){
    document.getElementById("luna").classList.toggle("hidden");
    document.getElementById("sol").classList.toggle("hidden");
}
        


document.getElementById("luna").addEventListener("click", darkmode);
document.getElementById("sol").addEventListener("click", darkmode);