var rights = 0;
var wrongs = 0;
var qs = 0;

function trivia(choice) {
    console.log(choice)
    if(choice==="right"){
        rights=rights+1;
    }
    else {
        wrongs=wrongs+1;
    }
    console.log("rights=" + rights);
    console.log("wrongs=" + wrongs);
    qs=qs+1
    document.getElementById("q"+qs).style.display="none";
    document.getElementById("q"+(qs+1)).style.display="block";
}
