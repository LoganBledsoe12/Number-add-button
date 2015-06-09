var $clickMeButton = $('#click-me');
$clickMeButton.on('click', buttonClick);
var numberClick = 0;
function buttonClick (){
	numberClick ++;
	console.log (numberClick);
	var likes = 'likes'
	if (numberClick===1){
		likes = 'like'
	}
	$clickMeButton.text(numberClick+ likes);

}