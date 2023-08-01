// generation of random value
var y= Math.floor(Math.random()* 10+1);
// count of attempts
// until hit
  var guess=1;
  function submit(){
    var x=document.getElementById("guessField").value;
    playername=localStorage.getItem("player_name")
    if(x==y)
    {
        alert("CONGRATUATIONS!!!"+playername+" YOU GUESSED IT RIGHT IN "
       +guess+ "GUESS");
       guess=1;
    }

    else if(x>y){
        guess++;
        alert("OOPS SORRY!!TRY A SMALL NUMBER");

    }

    else{
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER")
    }
  }
function playAgain(){
   y= Math.floor(Math.random()* 10+1);

}