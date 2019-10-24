/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    (function() {
        // Get the target
        var target = document.getElementById("target");
      
        // Dynamically add content
        target.innerHTML =
          '<p id="wave1">Woo-hoo !</p>' +
          '<p id="wave2">Je fais des vagues !</p>' +
          '<p id="wave3">Wééééé !</p>' + 
          '<p id="wave4">Oh...</p>' + 
          '<p id="wave5">je crois que je vais avoir le mal de mer...</p>';
      
        // Get those elements
        var list = target.querySelectorAll('[name="wave"]');
      
        // Prove we got them
        var p = document.createElement('p');
        p.innerHTML = "Found " + list.length + " 'special' elements";
        document.body.appendChild(p);
      })();


      target.style.display =" inline-flex";
      target.style.fontFamily = "monospace";
      target.style.textTransform ="uppercase";
      target.style.fontSize ="12px";
       


        document.getElementById("wave1").animate([
            // keyframes
            { transform: 'translatex(-3px)' }, 
            { transform: 'translateY(2px)' },
            { transform: 'translatex(3px)' },
            { transform: 'translatey(-2px)' }
          ], { 
            // timing options
            duration: 1000,
            iterations: Infinity
          });
    
            document.getElementById("wave2").animate([
                // keyframes
                { transform: 'translatex(-4px)' }, 
                { transform: 'translateY(3px)' },
                { transform: 'translatex(2px)' },
                { transform: 'translatey(-5px)' }
              ], { 
                // timing options
                duration: 2000,
                iterations: Infinity
              });
        
                document.getElementById("wave3").animate([
                    // keyframes
                    { transform: 'translatex(-2px)' }, 
                    { transform: 'translateY(10px)' },
                    { transform: 'translatex(15px)' },
                    { transform: 'translatey(-10px)' }
                  ], { 
                    // timing options
                    duration: 2000,
                    iterations: Infinity
                  });
                  document.getElementById("wave4").animate([
                    // keyframes
                    { transform: 'translatex(-1px)' }, 
                    { transform: 'translateY(8px)' },
                    { transform: 'translatex(12px)' },
                    { transform: 'translatey(-11px)' }
                  ], { 
                    // timing options
                    duration: 2000,
                    iterations: Infinity
                  });
                  document.getElementById("wave5").animate([
                    // keyframes
                    { transform: 'translatex(2px)' }, 
                    { transform: 'translateY(5px)' },
                    { transform: 'translatex(10px)' },
                    { transform: 'translatey(-5px)' }
                  ], { 
                    // timing options
                    duration: 2000,
                    iterations: Infinity
                  });
;
})();
