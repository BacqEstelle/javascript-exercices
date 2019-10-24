/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let targetSlider = document.getElementById("target");

    let partOne = document.getElementById("part-one");
    let oneCounterMax = partOne.getAttribute("data-max");   
    let oneCounterMin = partOne.getAttribute("data-min");   

    let partTwo = document.getElementById("part-two");
    let twoCounterMax = partTwo.getAttribute("data-max");   
    let twoCounterMin = partTwo.getAttribute("data-min");   

    let partThree = document.getElementById("part-three");
    let threeCounterMax = partThree.getAttribute("data-max");   
    let threeCounterMin = partThree.getAttribute("data-min");  

    let partFour = document.getElementById("part-four");
    let fourCounterMax = partFour.getAttribute("data-max");   
    let fourCounterMin = partFour.getAttribute("data-min");  


let intervalIDOne = window.setInterval(oneAnimation, 500);
let intervalIDTwo = window.setInterval(twoAnimation, 500);
let intervalIDThree = window.setInterval(threeAnimation, 500);
let intervalIDFour = window.setInterval(fourAnimation, 500);


function oneAnimation() {
let randomOne = Math.round((oneCounterMin)*100)/100;
    if (oneCounterMin < oneCounterMax) oneCounterMin++;
    partOne.value = randomOne;  
}

function twoAnimation() {
    let randomTwo = Math.round((twoCounterMin)*100)/100;
        if (twoCounterMin < twoCounterMax) twoCounterMin++;
        partTwo.value = randomTwo;  
}

function threeAnimation() {
    let randomThree = Math.round((threeCounterMin)*100)/100;
      if (threeCounterMin < threeCounterMax) threeCounterMin++;
          partThree.value = randomThree;  
}

function fourAnimation() {
    let randomfour = Math.round((fourCounterMin)*100)/100;
        if (fourCounterMin < fourCounterMax) fourCounterMin++;
        partFour.value = randomfour;  
}

let stateOne = true;
document.getElementById("fix-part-one").onclick = function (){

        if (stateOne) {
          clearInterval(intervalIDOne);

          resultOne = document.getElementById("part-one").value;
          targetSlider.innerHTML = resultOne +" " ;
          stateOne = false;
        } else {
          intervalIDOne = setInterval(oneAnimation, 500);
          stateOne = true;
        }

}

let stateTwo = true;
document.getElementById("fix-part-two").onclick = function (){
    if (stateTwo){
      
    clearInterval(intervalIDTwo);
    resultTwo = document.getElementById("part-two").value;
    targetSlider.innerHTML = resultOne + " " + resultTwo ;
    stateTwo = false;
    }else{ 
    intervalIDTwo = setInterval(twoAnimation, 500);
    statetwo = true;
    }
}

let stateThree = true;
document.getElementById("fix-part-three").onclick = function (){
    if (stateThree){
    clearInterval(intervalIDThree);

    resultThree = document.getElementById("part-three").value;
    targetSlider.innerHTML = resultOne +" "+ resultTwo +" "+ resultThree ;
    stateThree = false;
    }else{
    intervalIDThree = setInterval(threeAnimation, 500);
    stateThree = true;
    }


}
let stateFour = true;
document.getElementById("fix-part-four").onclick = function (){
    if (stateFour){
    clearInterval(intervalIDFour);

    resultFour = document.getElementById("part-four").value;
    targetSlider.innerHTML = resultOne +" "+ resultTwo +" "+ resultThree+" "+ resultFour ;
    stateFour = false;
    }else{
    intervalIDFour = setInterval(fourAnimation, 500);
    stateFour = true;
    }



}

})();
