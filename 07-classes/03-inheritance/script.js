/* becode/javascript
 *
 * /07-classes/03-inheritance/script.js - 7.3: héritage
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    class Animal {
        
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    class Cat {
        constructor(name, greeting) {
            this.name = name;

        }
        static greeting = "Miou ";
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }   
    class Dog {
        constructor(name, greeting) {
            this.name = name;

        }
        static greeting = "Wouf ";
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }

    document.getElementById("run").addEventListener("click", () => {
        var skitty = new Cat(" Skitty ");
        var doggy = new Dog(" Doggy ")

        console.log(skitty.sayHello());
        console.log(doggy.sayHello());

        


    
    }); 
})();
