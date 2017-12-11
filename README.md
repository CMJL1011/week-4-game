# week-4-game
HW 3 Pseudo Code

GUI
Heading 
Body 
	You will be given a random number at the start of the game

	There are 4 crystals below. Click a crystal will add a certain amount 			of points to your total score

	You win the game by matching your total score to the random 				number, you lose the game if your total score goes above the 				random number

	The value of each crystal is hidden from you until you click on it

	Each time when the game starts, the game will change the values of 			each crystal

//The player will be shown a random number at the start of the game.
Row 1 Box 1 Random #
Row 1 Box 2 Wins 
Row 1 Box 3 Loses

//There will be four crystals displayed as buttons on the page.
Row 2 Col 1 Ruby 1
Row 2 Col 1 Ruby 2
Row 2 Col 1 Ruby 3
Row 2 Col 1 Ruby 4











// When the player clicks on a crystal, it will add a specific amount of 		points to the player's total score. 

	//Your game will hide this amount until the player clicks a crystal.
     	//When they do click one, update the player's score counter.

On user interaction the bottom has to generate a random value and + that value to the player’s current score.
	
Row 3 Your Total Score Is!

//The player wins if their total score matches the random number from the beginning of the game.
Take and hold beginning value

//The player loses if their score goes above the random number.
If total-score > random-number-i : Game Over

// The game restarts whenever the player wins or loses.
If total  score > or = random-number-i restart game and clear all values

//When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.
On game start the arrays for each button will reset 
On game start all the user scoring will be reset

//The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.
Wins and loses must be tracked for all sessions


//The random number shown at the start of the game should be between 19 - 120.
Initial random # >19 <121

//Each crystal should have a random hidden value between 1 - 12.
Button Values = >0 <12

Loops 

First loop just generates the main random number which is displayed to the user as their goal

If User Score != Target Score - Generate a random number and display

The user’s current score is tracked in a separate box based on the clicks and values of each gem

If User Clicks Button 1 ++ Input to User Score 
If User Clicks Button 2 ++ Input to User Score
If User Clicks Button 3 ++ Input to User Score
If User Clicks Button 4 ++ Input to User Score

If the User Score is equal to the Random Number then a win is logged and If the score is != a win is logged 

Reset Conditions
Random-Main is reset when it is equal to the User-Score
User-Score is reset when it is equal to Random-Main
Wins and Loses only reset when browser is closed
Jewels reset when a win or loss is recorded
