var $clickMeButton = $('#click-me');
$clickMeButton.on('click', buttonClick);
var numberClick = 0;
function buttonClick (){
	numberClick ++;
	console.log (numberClick);
	$clickMeButton.text(numberClick+ ' likes');
}