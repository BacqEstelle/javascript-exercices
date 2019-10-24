/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let showHeroes = async function(id){
        let response = await fetch('http://localhost:3000/heroes' + "/" + id);
        let heroes = await response.json();
        console.log(heroes);
    }


    let deleteHeroes = async function(id){
        let response = await fetch('http://localhost:3000/heroes' + "/" + id,{
            method:'DELETE'
        });
        let deletedHeroes = await response.json();
        console.log(deletedHeroes);
    }

    document.getElementById("run").addEventListener("click", ()=>{
        let idHeroes = document.getElementById("hero-id").value;

        showHeroes(idHeroes);
        deleteHeroes(idHeroes);
    })
})();
