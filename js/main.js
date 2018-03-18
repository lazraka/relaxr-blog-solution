$(".link-bottom").on("click", function(){
	alert("We are not currently taking sign ups");
	$(".link-bottom").text("No sign Ups");

});

$('.readmore').click(function() { return false; });
$('.learnmore').click(function() { return false; });
var slideOnRead = false;

$(".readmore").on("click", function(){
	if (slideOnRead === false){
		slideOnRead=true;
		$(".readmore").html("Read Less");
		$(".extra-read").slideDown();
	}
	else if (slideOnRead === true){
		slideOnRead=false;
		$(".extra-read").slideUp();
		$(".readmore").html("Read More")
	};
});

var slideOnLearn = false;

$(".learnmore").on("click", function(){
	if (slideOnLearn === false){
		slideOnLearn=true;
		$(".extra-learn").slideDown();
		$(".learnmore").html("Learn Less");
	}
	else if (slideOnLearn === true){
		slideOnLearn=false;
		$(".extra-learn").slideUp();
		$(".learnmore").html("Learn More")
	};
});