/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let err = "Erreur script";
    document.getElementById("run").onclick = function (){
        window.lib.getPosts((err, articles) => { //voir plus bas 
            console.log(articles); 
            const ids = []; 
            for(const article of articles){ //parours e chaque article du tableau articles
                ids.push(article.id); //j'ajoute au tableau ids chaque valeur de id 
                for (const id of ids){ //je parcours chque id du taleau ids 
                    lib.getComments(id, (error, commentaire) => {
                        article.comments = commentaire; //j'ajoute à chue article une propeiété comments 
                    });
                }
            }
            
            }); //fin cl bck de getPosts 
        };
})();

/*
window.lib.getPosts = function(err, articles) {code de la fonction }
*/