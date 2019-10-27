var secondDate  = "20/10/2019 14";
var firstDate = "20/10/2019 13";

alert(moment.utc(moment(secondDate,"DD/MM/YYYY HH").diff(moment(firstDate,"DD/MM/YYYY HH"))).format("HH"));

alert(moment.utc(moment(secondDate,"DD/MM/YYYY HH")));
alert(moment.utc(moment(firstDate,"DD/MM/YYYY HH")));

// for (i=0; i<9; i++){

    

//     if (secondDatefirstDate) {
        
//     }

// }


function updateDOM(moment) {


    moment().startOf('hour').fromNow();
    (".input-group input-group-lg")

}