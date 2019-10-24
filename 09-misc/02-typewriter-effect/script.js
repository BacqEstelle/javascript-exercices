/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    newEle = document.createElement("p");
    newEle.setAttribute("id", "target");
    oldEle = document.getElementById("target");
    oldEle.parentNode.insertBefore(newEle, oldEle);

    //console.log(document.getElementById("target"));
    function extraire() {
        character = message.substring(I, I=I+1) ;
        if ( character == "-" &&  message.substr(I, 5) == "stop-" ) {              
             character = "<br>" ;
             I = I + 5;
             }
             newEle.innerHTML += character;
        if ( I < message.length ) setTimeout(extraire, 100);
        }
   I = 0 ;
   message = oldEle.innerHTML;
   
   extraire();
  
   oldEle.parentNode.removeChild(oldEle);
})();
