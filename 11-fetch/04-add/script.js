/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    const insertHeroes = async function(data){
        let response = await fetch('http://localhost:3000/heroes', {
            method : 'POST', // méthode pour poster en ligne
            headers : {
                'Content-type' : 'application/json' // Le contenu est uploadé en JSON
            },
            body: JSON.stringify(data) // Transformer le 'data' entré en paramètre en JSON
        })
        let listHeroes = await response.json() // Pour récupérer la  réponse et la retransformer en objet pour l'afficher
    console.log(listHeroes)
    }
    let heroes = {};


    document.getElementById("run").addEventListener("click", ()=>{
        heroes.name = document.getElementById("hero-name").value;
        heroes.alterEgo = document.getElementById("hero-alter-ego").value;
        heroes.abilities = document.getElementById("hero-powers").value.split(',');


        if(heroes.name == ""||heroes.alterEgo ==""||heroes.abilities[0]==""){
            alert("Veuillez remplir tous les champs !")
        }else{
            insertHeroes(heroes);

            alert(`Name: ${heroes.name}\n\n Alter Ego: ${heroes.alterEgo}\n\n Powers: ${heroes.abilities}`);

            document.getElementById("hero-name").value = "";
            document.getElementById("hero-alter-ego").value = "";
            document.getElementById("hero-powers").value = "";

        }
    })



})();
