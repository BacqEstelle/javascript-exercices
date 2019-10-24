/* becode/javascript
 *
 * /08-dom/07-generate-table-one/script.js - 8.7: génération d'un tableau (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



      var Tableau = document.getElementsByTagName("div")[2];
     

      var table = document.createElement("table");
      var tableTableau = document.createElement("tbody");
     

      for (var i = 0; i < 10; i++) {

        var row = document.createElement("tr");
     
        for (var j = 0; j < 1; j++) {

          var cell = document.createElement("td");
          var cellText = document.createTextNode("Ligne n° "+(i+1));
          cell.appendChild(cellText);
          row.appendChild(cell);
        }
     
 
        tableTableau.appendChild(row);
      }
     

      table.appendChild(tableTableau);

      Tableau.appendChild(table);


    

})();
