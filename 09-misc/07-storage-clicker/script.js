/* becode/javascript
 *
 * /09-misc/07-storage-clicker/script.js - 9.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   // window.onload = window.localStorage.clear(); // remise a 0 quand on recharge la page
     
    function active_counter() {
        var n = localStorage.getItem('on_click');
 
        if (n === null) {
            n = 0;
        }
         
        n++;
         
        localStorage.setItem("on_click", n);
         
        document.getElementById('target').innerHTML = n;
    }
     
    document.getElementById('increment').addEventListener('click', active_counter);



})();
