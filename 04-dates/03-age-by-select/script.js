/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
        document.getElementById("run").addEventListener("click", () => {


            var yearValue = document.getElementById("dob-year").value;
            var monthValue = document.getElementById("dob-month").value;
            var dayValue = document.getElementById("dob-day").value;
            
            var today = new Date();
            var birthday = new Date(yearValue, monthValue-1, dayValue);
            
            var diffMilisec = today.valueOf() - birthday.valueOf();

            
            var years_age = Math.floor(diffMilisec / 31557600000); // Moyenne sur 365.25 jours en millisecondes (pour compter les années bissextiles)
            var days_age = Math.floor((diffMilisec % 31557600000) / 86400000); 
            
            if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
                alert("Joyeux anniverssaire Vous avez "+ years_age + " ans aujourd'hui !");
            }
            
            var months_age = Math.floor(days_age/(30.4375)); // Moyenne de jours par mois basé sur un cycle de 4 ans comprennant une année bissextiles
            
            days_age = days_age % (30.4375);
            days_age = Math.round(days_age); //Arrondi le jour.

            
            if (isNaN(years_age) || isNaN(months_age) || isNaN(days_age)) {
                alert("Vous avez indiqué une date invalide !");
            }
            else {
                alert("Vous avez très exactement " + years_age + " ans " + months_age + " mois et " + days_age + " jours.");
            }
        });


})();
