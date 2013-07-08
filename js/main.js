$(document).ready(function() {

	var hunger = 3;
	var money = 7;
	var anger = 4;
	var attachment = 1;

	var purr = new Howl({
		urls: ['audio/DinoPurr.wav'],
		autoplay: false,
		loop: false,
		volume: 0.5,
		onend: function() {
			console.log('Finished!');
		}
	});

	var amb1 = new Howl({
		urls: ['audio/AmbientLoop_01.wav'],
		autoplay: true,
		loop: false,
		volume: 0.5,
		onend: function() {
			console.log('Finished!');
		}
	});

	var exp11 = new Howl({
		urls: ['audio/exp11.wav'],
		autoplay: false,
		loop: false,
		volume: 0.7,
		onend: function() {
			console.log('Finished!');
		}
	});

	$("#dino").on('mouseover', function() {
		attachment += 1;
		purr.play();
		console.log(attachment);
	});

	alert("His purpose in life - like Asimov's law of robotics - is not to aggravate you; Not to piss you off. His second thought is this: He absolutely loves you.                     - Peter Molyneux");

	$("#introChoice").on('click', function() {
		$("#tHello").removeClass('hidden');
		$("#checha1").hide();
		$("#1").removeClass('hidden').slideDown();
		$("#introChoice").addClass('hidden');
		$("#intro").addClass('hidden').slideDown();
		console.log("step1");
	});

	$("#choice1").on('click', function() {
		$("#tHello").hide();
		$("#jungle1").removeClass('hidden');
		$("#2").removeClass('hidden').slideDown();
		$("#choice1").addClass('hidden');
		$("#1").addClass('hidden');
		console.log("step2");

		var solved2a = false;

		$( "input" ).on( "click", function() {
			var checked2 = $("input:checked").val();
			console.log(checked2);
			if (checked2 == "wrenchA" && !solved2a) {
				$('#melted').append("<p><br>It wont budge because it's melted on.</p>");
			}
			else if (checked2 == "soldA") {
				$('#melted').append('<p id="hot"><br>The joint is hot and loose.</p>');
					solved2a = true;
				}
			else if ((checked2 == "wrenchA") && solved2a) {
				$('#hot').append('<br><p>You got the bolt off.<br><br>Something is breathing in your ear.</p>');	
				$("#choice2").removeClass('hidden');
			} 
		});
	});


	$("#choice2").on('click', function() {
		$("#3").removeClass('hidden').slideDown();
		$("#jungle1").hide();
		$("#dino").removeClass('hidden');
		$("#choice2").addClass('hidden');
		$("#2").addClass('hidden');
	});

	$("#choice3").on('click', function() {
		$("#4").removeClass('hidden').slideDown();
		$("#choice3").addClass('hidden');
		$("#3").addClass('hidden');
	});

	$("#choice4").on('click', function() {
		$("#5").removeClass('hidden').slideDown();
		$("#choice4").addClass('hidden');
		$("#4").addClass('hidden');
	});

	$("#choice5").on('click', function() {
		$("#town6").removeClass('hidden').slideDown();
		$("#choice5").addClass('hidden');
		$("#5").addClass('hidden');
		$("#dino").addClass('hidden');
		$("#womStand").removeClass('hidden');
	});

	$("#choice6").on('click', function() {
		$("#bar7").removeClass('hidden').slideDown();
		$("#town6").addClass('hidden');
		$("#6").addClass('hidden');
		$("#womStand").hide();
	});

	$("#choice7").on('click', function() {
		$("#vending8").removeClass('hidden').slideDown();
		$("#choice7").addClass('hidden');
		$("#bar7").addClass('hidden');
	});

	$("#choice8").on('click', function() {
		$("#choice8").addClass('hidden');
		$("#vending8").addClass('hidden');
		$("#atBar9").removeClass('hidden').slideDown();
	});

	$("#choice9").on('click', function() {
		$("#dino").removeClass('hidden');
		$("#atBar9").addClass('hidden');
		$("#choice9").addClass('hidden');
		$("#job10").removeClass('hidden').slideDown();
		
		var attachedNow = attachment;

		$("#dino").on('mouseover', function() {
			if (attachment > attachedNow) {
				$("#10b").removeClass('hidden').slideDown();
			}
			});
	});

	$("#choice10").on('click', function() {
		$("#choice10").addClass('hidden');
		$("#job10").addClass('hidden');
		$("#wires11").removeClass('hidden').slideDown();

		var done11 = false;

		setTimeout(function(){
			if(!done11) {
				$("#wires11").addClass('hidden');
				$("#death11").removeClass('hidden');
				$("#dino").hide();
			}
    }, 6000);


		$( "input" ).on( "click", function() {
			var checked11 = $("input:checked").val();
			console.log(checked11);
			if (checked11 == "soldA") {
				$('#finSod').append("<p>You quickly bring the wire tips together. It's gonna be a cold joint. You have to get out.</p>");	
				done11 = true;
				$('#choice11').removeClass('hidden');
			} 
		});
	});

	$("#choice11").on('click', function() {
		$("#choice11").addClass('hidden');
		$("#wires11").addClass('hidden');
		$("#exit12").removeClass('hidden').slideDown();
		exp11.play();
	});

	$(".playAgain").on('click', function() {
		$("#exit12").addClass('hidden');
		$("#dino").hide();
		$(".playAgain").addClass('hidden');
		$("#intro").removeClass('hidden').slideDown();
		$("#checha1").show();
		location.reload();
	});

});


























