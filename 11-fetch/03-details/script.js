/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    (() => {
        
let template = document.querySelector("#tpl-hero").cloneNode(true); 
let clone = document.importNode(template.content, true); 
document.getElementById("target").appendChild(clone); 
  
            document.getElementById("run").addEventListener("click", ()=>{ 
        

                let x = (document.getElementById("hero-id").value)-1; // vu que l'index commence a 0 et que l'id est a 1 alors on retire 1.
        
                async function returnHeroes(){ 
                    try{
                        let response = await fetch("http://localhost:3000/heroes"); 
                        let heroes = await response.json(); 
                        
                        let name = document.querySelector(`.hero>.title>.name`) 
                        let alterEgo = document.querySelector(`.hero>.title>.alter-ego`)
                        let powers = document.querySelector(`.hero>.powers`)
        
                        name.innerHTML = heroes[x].name; 
                        alterEgo.innerHTML = heroes[x].alterEgo;
                        powers.innerHTML = heroes[x].abilities;
        
                    } catch(e){
                        console.log(e);
                    }
                }
                returnHeroes();
                
            })
                
                
        })();
