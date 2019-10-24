/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Person {
        constructor(firstname, lastname) {
            this.firstname = firstname;
            this.lastname = lastname;
        }
            static name="";
                get name(){
                    return this.firstname + " " + this.lastname;
                };
                set name(str){
    
             this.firstname + this.lastname;
                }
            }

  
    document.getElementById("run").addEventListener("click", () => {
        skitty = new Person("Skitty", "jesuisunchat");
        console.log(skitty.name);
        doggy = new Person("Doggy","le chien");
        console.log(doggy.name);
                
        
        
            
            }); 
      
})();
