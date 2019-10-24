/* becode/javascript
 *
 * /08-dom/08-generate-table-two/script.js - 8.8: génération d'un tableau (2)
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
   
      for (var j = 0; j < 10; j++) {

        var cell = document.createElement("td");
        var cellText = document.createTextNode((i+1)*(j+1));
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
   

      tableTableau.appendChild(row);
    }
   

    table.appendChild(tableTableau);

    Tableau.appendChild(table);
})();
