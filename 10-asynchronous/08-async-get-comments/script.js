/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//lib.getPosts().then(async posts => console.log(await posts))
(() => {
    document.getElementById("run").onclick = function (){
        lib.getPosts().then(async(posts) => {
            console.log(await posts); 
    
            const ids = []; 
            for(const post of posts){ 
                ids.push(post.id); 
                for (const id of ids){ 
                    lib.getComments().then((comments => {
                        post.comments = comments; 
                        
                    }));
                }
            }
        })
    }
})();
