/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it 
const createSimpleNode = (balise,attributs = {}, classes = [], text = '') => {
    /* fonction qui va créer un élémet avec en param type de balise, ses attriuts etc */
    let element = document.createElement(balise); 
    for(let attribut in attributs){
        element.setAttribute(attribut, attributs[attribut])
    }
    for(let classes_element of classes){
        element.classList.add(classes_element);
    }
    if(text){
        element.appendChild(document.createTextNode(text));
    }
    return element;
}

(() => {
    let target = document.getElementById("target");
    let name = document.getElementsByClassName('name');
    const reference_HTML = document.getElementById('tpl-hero');
    document.getElementById("run").onclick = function (){
        let personnages = {};
        fetch("http://localhost:3000/heroes")
        .then(response => response.json())
        .then((response) => {
            for(let element of response){
               
                let hero = createSimpleNode('li',{}, ['hero']);
                let titre = createSimpleNode('h4',{}, ['title']); 
                let strong = createSimpleNode('strong', {}, ['name'], element.name); 
                let em = createSimpleNode('em', {}, ['alter-ego'], element.alterEgo); 
                let p = createSimpleNode('p', {}, ['powers']); 
                let capacites = ''; 
                if(element.abilities){
                    for (let ability of element.abilities){
                        capacites += ability;
                    }
                }
                p.textContent = capacites; 

                titre.appendChild(strong); 
                titre.appendChild(em); 
                hero.appendChild(titre); 
                hero.appendChild(p); 
                
                target.appendChild(hero);

                
               
            
            }
        })
        
        //.then(response => console.log(JSON.stringify(response)))
        .catch(error => console.log("Erreur : " + error));

        console.log(personnages);
    }

})();


