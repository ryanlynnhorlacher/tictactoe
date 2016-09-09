$(document).ready(function(){

	var $spaces = $('.space');
	var playerTurn = 1;
	var $endTurn = $('#end_turn');
	var $newGame = $('#new_game');
	var $playerDisplay = $('#player_display');
	var clicked = false;
	var player1Moves = [];
	var player2Moves = [];
	var win = false;
	var winningValues = [30, 1309, 12673, 266, 759, 2465, 638, 1045];
	var $player1Record = $('#player_1_record');
	var $player2Record = $('#player_2_record');
	var player1Record = 0;
	var player2Record = 0;

	$spaces.click(function(){
			$space = $(this);
		if(player1Moves.length === 5 && win !==true) {
			alert('You tied! Start a new game.');
		} else {
			if(win === true) {
				alert('You need to start a new game!')
			} else {
				if(playerTurn === 1) {
					if(clicked == true){
						alert('It isn\'t your turn!');
					} else {
						player1Moves.push(this.id);
						$space.text('X');
						$space.addClass('red-paint');
						clicked = true;	
						player_win(win_logic(player1Moves));
					}
				} else if(playerTurn === 2) {
					if(clicked == true){
						alert('It isn\'t your turn!');
					} else {
						player2Moves.push(this.id);
						$space.text('O');
						$space.addClass('blue-paint');
						clicked = true;
						player_win(win_logic(player2Moves));	
					}
				}
			}
		}
	})

	$endTurn.click(function(){
		if(clicked === false) {
			alert('You have to select a square first!')
		} else {
			if(playerTurn === 1) {
				playerTurn = 2;
				$playerDisplay.text('Player 2\'s turn');
				clicked = false;
			} else {
				playerTurn = 1;
				$playerDisplay.text('Player 1\'s turn');
				clicked = false;
			}
		}
	})

	$newGame.click(function(){
		$playerDisplay.text('Player 1\'s turn');
		playerTurn = 1;
		clicked = false;
		win = false;
		player1Moves = [];
		player2Moves = [];
		$spaces.text('');
		$spaces.removeClass('red-paint');
		$spaces.removeClass('blue-paint');
	})

	function player_win(winOrLose) {
		if(winOrLose === true && playerTurn === 1) {
			$playerDisplay.text('Player 1 wins!!');
			player1Record += 1;
			$player1Record.text(player1Record);
			win = true
		} else if(winOrLose === true && playerTurn === 2) {
			$playerDisplay.text('Player 2 wins!!');
			player2Record += 1;
			$player2Record.text(player2Record);
			win = true
		}
	}

	function win_logic(playerMoves) {
		for(var i = 0; i < playerMoves.length; i++) {
			for(var x = 0; x < playerMoves.length; x++) {
				for(var y = 0; y < playerMoves.length; y++) {
					var result = Number(playerMoves[i]) * Number(playerMoves[x]) * Number(playerMoves[y]);
					console.log(result)
					if(winningValues.indexOf(result) !== -1) {
						return true;
					}
				}
			}
		}
	}











})