/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let min =  1;
    let max = 100;
    let random = Math.floor(Math.random() * (max - min) + min);
    console.log(random);
    let essai = 0;

    chiffrePrompt();
    
function chiffrePrompt(){    
    let chiffre = prompt ("Quelle est votre chiffre ?");
    if(chiffre > random) {

        
        ++essai;
        
        alert("Votre chiffre est trop grand. Vous avez fait : " +essai+ " essais ");
        chiffrePrompt();
    }else if (chiffre < random) {
        ++essai;
        alert ("Votre chiffre est trop petit.  Vous avez fait : " +essai+ " essais" );
        chiffrePrompt();
        
    }else{

        alert ("votre chiffre est le bon ! Vous avez fait :" +essai+ " essais !");
    }
}
})();
