<script>
	
  var playerScore= 0; 
  var wins= 0;
  var losses = 0;
  //This variable group asigns global containers meant to hold the palyer's score, wins and losses
	
	
	$( document ).ready(function(){
  var Target= Math.floor(Math.random()*101+19);
  // This variable is responsible for holding the "random" # resulting from the math.random function
  // The function returns a value between 19 - 120 per "design note #1"
  //
  $('#target-number').text(Target);
  // This jQuery statement provides the "append" between the HTML doc id "target-number" 
 // and the variable "Target" so that a readable value can be displayed to the player	
  //
  var bgem= Math.floor(Math.random()*11+1);
  var ggem= Math.floor(Math.random()*11+1);
  var rgem= Math.floor(Math.random()*11+1);
  var wgem= Math.floor(Math.random()*11+1);
  // This variable group captures the randomization fuctionality for the interactive gem elements
  // The Math.random function is utilized to provide random number generation and satisfy the range 
  // requirement [1-12] outlined in "design note #2 for Option 1
 
$('#win-total').text(wins);
$('#loss-total').text(losses);
// This jQuery statement provides the "append" between the HTML doc ids "win-total" and "loss-total" 
 // and the variables "wins" and "losses" so that a readable value can be displayed to the player
		
		
function gameReset(){
      Target= Math.floor(Math.random()*101+19);
      console.log(Target);
      $('#target-number').text(Target);
      bgem= Math.floor(Math.random()*11+1);
      ggem= Math.floor(Math.random()*11+1);
      rgem= Math.floor(Math.random()*11+1);
      wgem= Math.floor(Math.random()*11+1);
      playerScore= 0;
      $('#player-score').text(playerScore);
      } 
//This function serves as a reset to the win and loss functions below 						

function forTheWin(){
alert("Great Job! You Won!");
  wins++; 
  $('#win-total').text(wins);
  gameReset();
}
//This function increses the player's wins after a successful round		
function tkanL(){
alert ("Give It Another Try!");
  losses++;
  $('#loss-total').text(losses);
  gameReset();
}
		
//This function increses the player's losses after an unsuccessful round			

  $('#B1').on ('click', function(){
    playerScore = playerScore + bgem;
    console.log("playerScore= " + playerScore);
    $('#player-score').text(playerScore); 
        if (playerScore == Target){
          forTheWin();
        }
        else if ( playerScore > Target){
          tkanL();
        }   
  })  
	//This function serves as an event listener and score keeper for the blue gem	
		
  $('#G2').on ('click', function(){
    playerScore = playerScore + ggem;
    console.log("playerScore= " + playerScore);
    $('#player-score').text(playerScore); 
          //sets win/lose conditions
        if (playerScore == Target){
          forTheWin();
        }
        else if ( playerScore > Target){
          tkanL();
        }   
  })  
		//This function serves as an event listener and score keeper for the green gem
  $('#R3').on ('click', function(){
    playerScore = playerScore + rgem;
    console.log("playerScore= " + playerScore);
    $('#player-score').text(playerScore); 
          //sets win/lose conditions
        if (playerScore == Target){
          forTheWin();
        }
        else if ( playerScore > Target){
          tkanL();
        } 
  })  
		//This function serves as an event listener and score keeper for the red gem
  $('#W4').on ('click', function(){
    playerScore = playerScore + wgem;
    console.log("playerScore= " + playerScore);
    $('#player-score').text(playerScore); 
          //sets win/lose conditions
        if (playerScore == Target){
          forTheWin();
        }
        else if ( playerScore > Target){
          tkanL();
        }
  });   
		//This function serves as an event listener and score keeper for the white gem
});  
	</script>
