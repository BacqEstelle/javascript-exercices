/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    let obj = document.getElementsByTagName("span")[1]; 
    ref= obj.getAttribute("data-image");

    var tagFigure = document.getElementsByTagName('figure')[0];

    var tagImage = document.createElement('img');
        tagImage.innerHTML = tagFigure.innerHTML;

        tagFigure.parentNode.insertBefore(tagImage, tagFigure);
        tagFigure.parentNode.removeChild(tagFigure);
    
    let obj2 = document.querySelector("img"); 
    ref2= obj2.setAttribute("src", ref);

    obj.parentNode.removeChild(obj);
    
    console.log(ref);

 



    
})();
