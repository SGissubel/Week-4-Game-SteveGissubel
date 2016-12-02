var userHealth = 100; //or health--100
var comHealth = 100; //or health--100
var damage = 0; //display damage points
var special = '';
var start = $("<img>").addClass("startBtn").attr("src", "images/ryuKenStartFight.gif");

var kenAttacks = {
	kenPunchRight: $("<img>").addClass("kenPunchRight").attr("src", "images/Ken/kenPunchRight.gif"),

	kenSpecialRight: $("<img>").addClass("kenSpecialRight").attr("src", "images/Ken/kenSpecialRight.gif"),
	kenKickRight: $("<img>").addClass("kenKick").attr("src", "images/Ken/kenKickRight.gif"),
	kenNoogieRight: $("<img>").addClass("kenNoogieRight").attr("src", "images/Ken/kenNoogieRight.gif"),
	kenNoggieLeft: $("<img>").addClass("kenNoogieLeft").attr("src", "images/Ken/kenNoogieLeft.gif"),
 	
 	kenPunchLeft: $("<img>").addClass("kenPunchLeft").attr("src", "images/Ken/kenPunchLeft.gif"),
	kenSpecialLeft: $("<img>").addClass("kenSpecialLeft").attr("src", "images/Ken/kenSpecialLeft.gif"),
 	kenKickLeft: $("<img>").addClass("kenKickLeft").attr("src", "images/Ken/kenKickLeft.gif"),
 	}

 var ryuAttacks = {
	ryuPunchRight: $("<img>").addClass("ryuPunchRight").attr("src", "images/ryu/ryuPunchRight.gif"),
	ryuSpecialRight: $("<img>").addClass("ryuSpecialRight").attr("src", "images/ryu/ryuFireBallRight.gif"),
 	ryuKickRight: $("<img>").addClass("ryuKick").attr("src", "images/ryu/ryuKickRight.gif"),
	ryuPunchLeft: $("<img>").addClass("ryuPunchLeft").attr("src", "images/ryu/ryuPunchLeft.gif"),
	ryuSpecialLeft: $("<img>").addClass("ryuSpecialLeft").attr("src", "images/ryu/ryuFireBallLeft.gif"),
 	ryuKickLeft: $("<img>").addClass("ryuKickLeft").attr("src", "images/ryu/ryuKickLeft.gif"),
 	}
 
var moves = ['ryuPunchLeft','ryuSpecialLeft', 'ryuKickLeft'];

var kenPlayerRight = $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyRight.gif");
var kenPlayerLeft = $("<img>").addClass("kenPlayer").attr("src", "images/Ken/kenReadyLeft.gif");
var ryuPlayerRight = $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyRight.gif");
var ryuPlayerLeft = $("<img>").addClass("ryuPlayer").attr("src", "images/ryu/ryuReadyLeft.gif");
var playerOne = '';
var playerTwo = '';
var computerAttack;
var keys;
var randomMoveRyu = moves[Math.floor(Math.random()*ryuAttacks.length)]


	//choosing a player--make choosing a player the same as the calculator (choose number (character) ends the function--choose operator(othercharacter--ends other functions?)game starts ='s)
	
	//loading window stuff

$(document).ready(function() {

	// $(document).on('click','.special, .punch, .kick',  function () {
	// 	$('.comHealth').text("Computer Health: " + comHealth);
	// 	$('.userHealth').text("User Health: " + userHealth);
	// }) 

	$(window).load(function (){
		$('.readybtn').hide()
		$('.selector').hide();
		$('.special').hide();
		$('.punch').hide();
		$('.kick').hide();
		$('.block').hide();
		$('.userHealth').text("User Health: " + userHealth);
		$('.comHealth').text("Computer Health: " + comHealth);

	});


$(document).on('click','.choiceOne, .choiceTwo', function () {
	$(this).hide();
	var divClass = $(this).data('divclass');

	if (divClass == 'ryu'){
		$('.playerOne').append(ryuPlayerRight);
		$('.playerTwo').append(kenPlayerLeft);
		$('.choiceTwo').hide();

		playerOne = 'ryu';
		playerTwo = 'ken'
	} 
	else if (divClass == 'ken') {
	 	$('.playerOne').append(kenPlayerRight); 
	 	$('.playerTwo').append(ryuPlayerLeft)
	 	$('.choiceOne').hide();

	 	playerOne = 'ken';
	 	playerTwo = 'ryu';
	 }
	  
});

// var randomProperty = function (obj) {
//     var keys = kenAttacks.keys(obj)
//     return obj[keys[ keys.length * Math.random() << 0]];
// };


	$('.startbtn').one('click', function () {
		ryuPlayerRight.hide().delay(2300).fadeIn();
		kenPlayerLeft.hide().delay(2300).fadeIn();
		$(this).hide();
		$('.selector').show();
		$('.readybtn').show();
	});


	$('.readybtn').one('click', function(){
		$('.playerOne').hide().delay(2500).fadeIn();
		$('.playerTwo').hide().delay(2500).fadeIn();
		$('.special').show();
		$('.punch').show();
		$('.kick').show();
		$(this).hide();
		$('.choose').hide();
		$('.fighters').append(start);
		start.show().delay(2500).fadeOut();
		
		
	
	});

//**********************************************ATTACKS******************************************************

$(document).on('click','.special, .punch, .kick',  function () {
		$('.comHealth').text("Computer Health: " + comHealth);
		$('.userHealth').text("User Health: " + userHealth);
	}) 



	$(document).on('click','.special', function () {
			
			special = (Math.floor(Math.random()* 10) + 25);

			if (special >= 30){
				comHealth = comHealth - 10;
			}else if (special <= 30){
			$('.block').show().delay(2000).fadeOut();
				comHealth = comHealth - 2;
			} 
		
		if (playerOne == 'ken'){
			$('.playerOne').html(kenAttacks.kenSpecialRight);
			
			
			setTimeout(function(){
				$('.playerOne').html(kenPlayerRight);
			}, 2000);

			computerAttack = setTimeout(function (){
				for (userHealth = userHealth-6;; userHealth += 6) {
						$('.userHealth').text("User Health: " + userHealth);
					}
				$('.playerTwo').html(randomMoveRyu[moves]);
			}, 3000);
			



		}else {
			$('.playerOne').html(ryuAttacks.ryuSpecialRight)

			setTimeout(function(){
				comHealth = comHealth - 15;
				$('.playerOne').html(ryuPlayerRight);
			}, 4000);
		}

	});	


//********************************************************PUNCH******************************************************

	$(document).on('click','.punch', function () {

				punch = (Math.floor(Math.random()* 8) + 10);

				if (punch >= 30){
					comHealth = comHealth - 10;
				}else if (special <= 30){
				$('.block').show().delay(2000).fadeOut();
					comHealth = comHealth - 2;
				} 

			
			if (playerOne == 'ken'){
				$('.playerOne').html(kenAttacks.kenPunchRight);
				
				setTimeout(function(){
					ryuPlayerLeft.hide().delay(2000).fadeIn();

					$('.playerOne').html(kenAttacks.kenNoogieRight);
				}, 2000);
				
				setTimeout(function(){
					$('.playerOne').html(kenPlayerRight);
				}, 3000);
				comHealth = comHealth - 5;

				computerAttack = setTimeout(function (){
					
					$('.playerTwo').html(randomMoveRyu[moves]);
				}, 3500);
				



			}else {
				$('.playerOne').html(ryuAttacks.ryuPunchRight)

				setTimeout(function(){
					$('.playerOne').html(ryuPlayerRight);
				}, 6500);
			}

	});	


//********************************************************KICK******************************************************

	$(document).on('click','.kick', function () {
			
			if (playerOne == 'ken'){
				$('.playerOne').html(kenAttacks.kenKickRight);

				setTimeout(function(){
					$('.playerOne').html(kenPlayerRight);
				}, 1000);
				comHealth = comHealth - 10;

				computerAttack = setTimeout(function (){
					
					$('.playerTwo').html(randomMoveRyu[moves]);
				}, 1500);
				



			}else {
				$('.playerOne').html(ryuAttacks.ryuKickRight)
					kenPlayerLeft.hide().delay(2000).fadeIn();

				setTimeout(function(){
					$('.playerOne').html(ryuPlayerRight);
				}, 2000);
			}

	});	
// $(document).on('click','.punch', function () {
// 		special = (Math.floor(Math.random()* 10) + 25);
// 			kenPlayerRight.hide().delay(2500).fadeIn();
// 			$('.playerOne').append(kenAttacks.kenPunchRight)
// 			kenAttacks.kenPunchRight.show().delay(2500).fadeOut();
// 			punch = (Math.floor(Math.random()* 8) + 10);
// 			var comAttack = setTimeout(function(){
// 			randomMove = moves[Math.floor(Math.random()*ryuAttacks.length)];
//     		  }, 3000);
			
// 			var comAttackPoint = setTimeout(function(){
			
// 			for (userHealth = userHealth-6; userHealth <= 100; userHealth += 6) {
// 					$('.userHealth').text("User Health: " + userHealth);
// 				}
//     		});

// 			if (punch >= 14){
// 				comHealth = comHealth - 10;
// 			}else {
// 			$('.block').show().delay(2000).fadeOut();
// 				comHealth = comHealth - 2;
// 			} 

		
	
// 	});
		// debugger;
		// special = (Math.floor(Math.random()* 10) + 25);



		// kenPlayerRight.hide().delay(2500).fadeIn();

		// $('.playerOne').append(kenAttacks.kenPunchRight)

		// kenAttacks.kenPunchRight.show().delay(2500).fadeOut();

		// punch = (Math.floor(Math.random()* 8) + 10);

		// var comAttack = setTimeout(function(){
		// 	randomMove = moves[Math.floor(Math.random()*ryuAttacks.length)];

		// }, 3000);
			
		// var comAttackPoint = setTimeout(function(){
		
		// for (userHealth = userHealth-6; userHealth <= 100; userHealth += 6) {
		// 	$('.userHealth').text("User Health: " + userHealth);
		// }

		// if (punch >= 14){
		// 	comHealth = comHealth - 10;
		// }else {
		// 	$('.block').show().delay(2000).fadeOut();
		// 	comHealth = comHealth - 2;
		// } 

		// $('.comHealth').text("Computer Health: " + comHealth);
		// $('.userHealth').text("User Health: " + userHealth);
	
});







// $(document).on('click', '.punch', function (){
// 	$('.playerTwo').append(kenAttacks.kenPunch);

// })
		
// 	$('.punch').on('click', function(){
// 			kenAttacks.kenPlayerLeft.hide().delay(2000).fadeIn();
// 		$('.playerTwo').append(kenAttacks.kenPunch);
// 		kenAttacks.kenPunch.show().delay(2000).fadeOut();
	










