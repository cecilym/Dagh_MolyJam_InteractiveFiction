$(document).ready(function(){

	var hunger = 3;
	var money = 7;
	var anger = 4;
	var attachment = 1;

	$("#moose").on('mouseover', function() {
		attachment += 1;
		console.log(attachment);
	});

	$("#introChoice").on('click', function() {
		$("#1").removeClass('hidden').slideDown();
		$("#introChoice").addClass('hidden');
		$("#intro").addClass('hidden');
		console.log("step1");
	});

	$("#choice1").on('click', function() {
		$("#2").removeClass('hidden').slideDown();
		$("#choice1").addClass('hidden');
		$("#1").addClass('hidden');
		console.log("step2");
	});

	$("#choice2").on('click', function() {
		$("#3").removeClass('hidden').slideDown();
		$("#moose").removeClass('hidden');
		$("#choice2").addClass('hidden');
		$("#2").addClass('hidden');
		console.log("step3");
	});

	$("#choice3").on('click', function() {
		$("#4").removeClass('hidden').slideDown();
		$("#choice3").addClass('hidden');
		$("#3").addClass('hidden');
		console.log("step4");
	});

	$("#choice4").on('click', function() {
		$("#5").removeClass('hidden').slideDown();
		$("#choice4").addClass('hidden');
		$("#4").addClass('hidden');
		console.log("step5");
	});

	$("#choice5").on('click', function() {
		$("#town6").removeClass('hidden').slideDown();
		$("#choice5").addClass('hidden');
		$("#5").addClass('hidden');
		console.log("step6");
	});

	$("#choice6").on('click', function() {
		$("#bar7").removeClass('hidden').slideDown();
		$("#town6").addClass('hidden');
		$("#6").addClass('hidden');
		console.log("step6");
	});

});












