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
    if(qs<10){
    document.getElementById("q"+(qs+1)).style.display="block";
    }
    else{
        showresults()
    }
}

var questions = ['q1','q2','q3','q4','q5','q6','q7','q8','q9','q10']
function shuffle(questions) {
  questions.sort(() => Math.random() - 0.5);
}
shuffle(questions);
console.log(questions);



function showresults(){
    if (rights<3){
        document.getElementById("results").innerHTML=("You Got" + rights + "Anwsers Right!<p>You are just a human being :( </p>");
    }
    else if (rights < 6){
        document.getElementById("results").innerHTML=("You Got" + rights + "Anwsers Right!<p> You are on your way to becoming a Greek God!</p>");
    }
    else if (rights <9){
        document.getElementById("results").innerHTML=("You Got" + rights + "Anwsers Right!<p>You are a Demi-God! </p>");
    }
    else if(rights =10){
        document.getElementById("results").innerHTML=("You Got" + rights + "Anwsers Right!<p>Are you sure you are not a Greek God yourself? </p>");
    }



        document.getElementById("results").style.display="block";
}

