/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {

        
        function format_date(d1) {
            var monthName=new Array(13);
            monthName[1]="Janvier"; monthName[2]="Février";    monthName[3]="Mars"; monthName[4]="Avril"; monthName[5]="Mai"; monthName[6]="Juin";
            monthName[7]="Juillet";    monthName[8]="Août"; monthName[9]="Septembre"; monthName[10]="Octobre";    monthName[11]="Novembre"; monthName[12]="Décembre";
            var dayName=new Array(8);
            dayName[1]="Dimanche"; dayName[2]="Lundi"; dayName[3]="Mardi"; dayName[4]="Mercredi"; dayName[5]="Jeudi"; dayName[6]="Vendredi"; dayName[7]="Samedi";
            var month=monthName[d1.getMonth()+1];
            var day=dayName[d1.getDay()+1];
            var date=d1.getDate();
            var year=d1.getYear();
            if (year<200) year+=1900; 
            date=day+" "+date+" "+month+" "+year;
            return date;
            }
            function prochain() {
                var date_day=new Date();
                var year=date_day.getYear();
                if (year<200) year+=1900; 
                var monthName=date_day.getMonth();
                var dayName=date_day.getDate(); 
                if (dayName>13) monthName++;
                var vendredi="";
                while (vendredi=="") {
                    date_day.setDate(13);
                    date_day.setMonth(monthName);
                    date_day.setYear(year);
                    if (date_day.getDay()==5) {
                        vendredi=format_date(date_day);
                    }
                    monthName++; 
                    if (monthName==13) {monthName=0; years++;}
                }
                return vendredi;
            }
            function getVendredi() {    
                var year=document.getElementById("year").value;
                var date_day=new Date();
                alert("Les vendredi 13 de l'année "+year+" sont");
                for(var i=0;i<12;i++) {
                    date_day.setMonth(i);
                    date_day.setDate(13);
                    date_day.setYear(year);
                    if (date_day.getDay()==5) {
                        alert(" "+unescape(format_date(date_day)+" ,"));
                    }
                }
            }
            getVendredi();
            alert ("N'oubliez pas de jouer au loto !");
    });
})();
