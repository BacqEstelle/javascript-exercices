/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    date = new Date();
    hours = date.getHours();
    min = date.getMinutes();
    time = (hours*60) + min;
    night= (17*60) + 30;
    if (time < night) {
        document.getElementById("target").innerHTML = "Bonjour il est "+ hours +":" +min;
    }
    else {
        document.getElementById("target").innerHTML = "Bonsoir il est "+ hours +":" +min;
    }
})();
