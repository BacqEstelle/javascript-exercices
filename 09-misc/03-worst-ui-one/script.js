/* becode/javascript
 *
 * /09-misc/03-worst-ui-one/script.js - 9.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    let slider = document.getElementById("slider");
    let targetSlider = document.getElementById("target");


    targetSlider.innerHTML = slider.value; 
    

    slider.oninput = function() {
      targetSlider.innerHTML = this.value;
    }

    let style = document.createElement('style');
    style.innerHTML = `
    .material {
    color: blueviolet;
    font-size : 50px;
    border : 10px solid black;
    background-color : red;
    }
    .input#slider {
    background : yellow;
        }
    `;
    document.head.appendChild(style);
})();
