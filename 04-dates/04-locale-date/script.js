/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    date = new Date();
    dayName = date.getDay();
    day = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();
    hour = date.getHours();
    min = date.getMinutes();

    if (dayName == 0){
        dayName = "Dimanche ";
    }
    else if (dayName == 1){
        dayName = "Lundi";
    }
    else if (dayName == 2){
        dayName = "Mardi";
    }
    else if (dayName == 3){
        dayName = "Mercredi";
    }
    else if (dayName == 4){
        dayName = "Jeudi";
    }
    else if (dayName == 5){
        dayName = "Vendredi";
    }
    else if (dayName == 6){
        dayName = "Samedi";
    }
    else {
        close;
    }
    document.getElementById("target").innerHTML = "Nous sommes le " +dayName+ " " +day+ "/"+month+"/"+year+", "+hour+ ":"+min+" !";


})();
