/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let targetSlider = document.getElementById("target");
    let partOne = document.getElementById("part-one");
    let partTwo = document.getElementById("part-two");
    let partThree = document.getElementById("part-three");
    let partFour = document.getElementById("part-four");

    let  partOneMin = partOne.getAttribute("data-min");
    let partOneMax = partOne.getAttribute("data-max");
    let randomOne = Math.floor(Math.random() * Number(partOneMax - partOneMin)) + Number(partOneMin); 

    let  partTwoMin = partTwo.getAttribute("data-min");
    let partTwoMax = partTwo.getAttribute("data-max");
    let randomTwo = Math.floor(Math.random() * Number(partTwoMax - partTwoMin)) + Number(partTwoMin); 

    let  partThreeMin = partThree.getAttribute("data-min");
    let partThreeMax = partThree.getAttribute("data-max");
    let randomThree = Math.floor(Math.random() * Number(partThreeMax - partThreeMin)) + Number(partThreeMin);

    let  partFourMin = partFour.getAttribute("data-min");
    let partFourMax = partFour.getAttribute("data-max");
    let randomFour = Math.floor(Math.random() * Number(partFourMax - partFourMin)) + Number(partFourMin);


    document.getElementById("part-one").onclick = function (){

        targetSlider.innerHTML = randomOne;
    }
    document.getElementById("part-two").onclick = function (){
         

                targetSlider.innerHTML = randomOne +" " +randomTwo;
       
    }
    document.getElementById("part-three").onclick = function (){
         

        targetSlider.innerHTML = randomOne +" " +randomTwo + " " + randomThree;

}
document.getElementById("part-four").onclick = function (){
         

    targetSlider.innerHTML = randomOne +" " +randomTwo + " " + randomThree + " " + randomFour;

}
let style = document.createElement('style');
style.innerHTML = `
.material {
color: blueviolet;
font-size : 50px;
border : 10px solid black;
background-color : red;
}
#part-one {
    background-color : yellow;
    color: red;
}
#part-two {
    background-color : orange;
    color: gray;
}
#part-three {
     background-color : brown;
     color: violet;
}
#part-four {
    background-color : silver;
    color: yellow;
        }
`;
document.head.appendChild(style);

})();
