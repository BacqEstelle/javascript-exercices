/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let err = "Erreur script";
    document.getElementById("run").onclick = function (){
        window.lib.getPosts((err, articles) => {
            console.log(articles);
        });
    }
})();
