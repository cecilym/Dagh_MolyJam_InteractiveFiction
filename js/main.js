$(document).ready(function(){

	$("#introChoice").on('click', function() {
		$("#2").removeClass('hidden').slideDown();
		$("#introChoice").hide();
		$("#intro").hide();
		console.log("step1");
	});

	$("#choice2").on('click', function() {
		$("#3").removeClass('hidden').slideDown();
		$("#choice2").hide();
		$("#2").hide();
		console.log("step2");
	});

	$("#choice3").on('click', function() {
		$("#4").removeClass('hidden').slideDown();
		$("#choice3").hide();
		$("#3").hide();
		console.log("step4");
	});

});
