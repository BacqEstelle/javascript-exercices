/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    document.getElementById("run").addEventListener("click", () => {
        function getRandomNum(max) {
            return Math.floor(Math.random() * Math.floor(99));
          }


        chiffreUn = document.getElementById("n-1").innerHTML = getRandomNum(1);
        chiffreDeux = document.getElementById("n-2").innerHTML = getRandomNum(1);    
        chiffreTrois = document.getElementById("n-3").innerHTML = getRandomNum(1);    
        chiffreQuatre = document.getElementById("n-4").innerHTML = getRandomNum(1);  
        chiffreCinq = document.getElementById("n-5").innerHTML = getRandomNum(1);  
        chiffreSix = document.getElementById("n-6").innerHTML = getRandomNum(1);  
        chiffreSept = document.getElementById("n-7").innerHTML = getRandomNum(1);  
        chiffreHuit = document.getElementById("n-8").innerHTML = getRandomNum(1);  
        chiffreNeuf = document.getElementById("n-9").innerHTML = getRandomNum(1);  
        chiffreDix = document.getElementById("n-10").innerHTML = getRandomNum(1);  
        tableau = [chiffreUn, chiffreDeux, chiffreTrois, chiffreQuatre, chiffreCinq, chiffreSix, chiffreSept, chiffreHuit, chiffreNeuf, chiffreDix];
        
        
         
         function valeur_calcul(tableau)
         {
             sum = 0;	
             for(ical=0;ical<tableau.length; ical++)
                 {		
                 if (!isNaN(Number(tableau[ical])))
                     {		
                     sum += Number(tableau[ical]);	
                     }		
                 }
             return sum;
         }
         sum=valeur_calcul(tableau);

         function valeur_moyenne(tableau) {


            var n = tableau.length;
            var somme=0;
            for(iave=0; iave<n; iave++)
            {
                somme += tableau[iave];
            }
            var aver = somme / n;
            return aver;

         }
         average=valeur_moyenne(tableau);

        max = Math.max.apply(null, tableau) // 4
        min = Math.min.apply(null, tableau) // 1

        document.getElementById("min").innerHTML = min; 
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average;
    }); 
        
})();
