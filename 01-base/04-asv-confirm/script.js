/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function depart(){
    var age = prompt ("Quel est votre age ?");
    var sexe = prompt ("Quel est votre sexe ?");
    var ville = prompt ("Quelle est votre ville ?");
    alert("Vous avez " + age + " ans, Vous etes " + sexe + ", Vous habitez à " + ville);
    verification ();
    }
    function verification() {
        if (confirm("Nos informations sont-elles correctes ?")){
                alert("Nous vous remercions !");
        }
        else {
            alert("Ok, recommencons alors !")
            depart();
        }
    }
    depart();
})();
