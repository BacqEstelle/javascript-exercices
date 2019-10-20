/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Anthony",
        "Leny",
        "Alexandre",
        "Eric",
        "Caroline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    document.getElementById("run").addEventListener("click", () => {


        console.log("Il y a "+people.size+" dans la liste");
        if (people.has("Alexandre")) {
            console.log("Il y a Alexandre dans la liste");
        }
        else {
            console.log("Il n'y a pas Alexandre dans la liste");
        }



        


    
    }); 
})();
