var wins=0;
var losses=0;
var button1,button2, button3,button4;
var score=0;
var rValue;
// function to generate random number between 19 to 120
 function randomGenerater()
 {
    rValue=Math.floor(Math.random() *102) +19 ;
    $("#rNumber").html(rValue);
    console.log(rValue);
 }

 // function to generate random value for crystals
 function crystalValue()
 {
    var arr=[];
    var check=true;
    for(var i=0;i<12;i++)
    {
            n=Math.floor(Math.random() *12 +1);
            check=arr.includes(n);
            if(check === false)
            {
                arr.push(n);
            }
    }
    bt1.value=arr[0];
    console.log(bt1.value);
    bt2.value=arr[1];
    console.log(bt2.value);
    bt3.value=arr[2];
    console.log(bt3.value);
    bt4.value=arr[3];
    console.log(bt4.value);
    // button1=arr[0];
    // button2=arr[1];
    // button3=arr[2];
    // button4=arr[3];
    // console.log(button1);
    // console.log(button2);
    // console.log(button3);
    // console.log(button4);
 }


 //increment the value of win and lose
 function changeWinLose()
 {
    if(score === rValue)
    {
        wins++;
        console.log(wins);
        $("#winValue").html(wins);
        $("#score").html(score);
        restartGame();
    } 
    if(score>rValue)
     {
         losses++;
         console.log(losses);
         $("#loseValue").html(losses);
         $("#score").html(score);
         restartGame();
    }
 }


 
 //function to restart the game when player lose or win everytime
 function restartGame()
 {
     score=0;
     $("#score").html(score);
     console.log(score);
     randomGenerater();
     crystalValue();
 }

 function blink_text() 
 {
    $('.blink').fadeOut(500);
    $('.blink').fadeIn(500);
 }

 $(document).ready (function()
 {
      setInterval(blink_text, 1000);
      randomGenerater();
      crystalValue();
     $(".blink").on("click",function()
     {
        $("p").slideToggle("slow");
     });

     $("#bt1,#bt2,#bt3,#bt4").on("click",function()
     {
        var d=parseInt(this.value);
          score=score + d;
          if(score === rValue)
        {
            wins++;
            console.log(wins);
            $("#winValue").html(wins);
            restartGame();
        } 
        if(score>rValue)
         {
             losses++;
             console.log(losses);
             $("#loseValue").html(losses);
             restartGame();
        }
        if(score<rValue)
        {
          console.log("d",d);
          console.log("score",score);
          $("#score").html(score);
        }
     });
 });