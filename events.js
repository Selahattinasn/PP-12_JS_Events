
/********  Variablen **********/

const btn = document.getElementById("trigBtn");


/********  Event-Listener **********/
btn.addEventListener("click",onClick);


function onClick() {
   output("clicked");
}




/********  Business-Logic | Toggle **********/



/********  Änderung in View-Schicht **********/

// Modul: Umschaltung Klassenamen | Test:
// switchClassName("night");
// switchClassName("day");
function switchClassName(modeStr) {
    document.body.className = modeStr;
    document.body.children[0].className = modeStr;
    document.body.children[1].className = modeStr;
}

// Modul: Umschaltung BtnTxt | Test:
// switchBtnTxt("night");
// switchBtnTxt("day");
function switchBtnTxt(modeStr) {
    btn.innerHTML = modeStr;
 }

/* Tools */
function output(outputData) {
    console.log(outputData);
}