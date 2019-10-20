/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value
      

    document.getElementById("addition").addEventListener("click", () => {
        var a = Number(document.getElementById('op-one').value);
        var b = Number(document.getElementById('op-two').value);
        var add = a + b; 
        alert (add);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        var a = Number(document.getElementById('op-one').value);
        var b = Number(document.getElementById('op-two').value);
        var sub = a - b; 
        alert (sub);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        var a = Number(document.getElementById('op-one').value);
        var b = Number(document.getElementById('op-two').value);
        var mul = a * b; 
        alert (mul);
    });

    document.getElementById("division").addEventListener("click", () => {
        var a = Number(document.getElementById('op-one').value);
        var b = Number(document.getElementById('op-two').value);
        var div = a / b; 
        alert (div);
    });

})();
