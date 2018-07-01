// Select color input

// Select size input

//Define variables
var height,width,color;


// Submit event listener

$('#sizePicker').submit(function (event){

	event.preventDefault();

	height= $('#inputHeight').val();

	width= $('#inputWidth').val();

	makeGrid(height,width);

})

// When size is submitted by the user, call makeGrid()

function makeGrid(x, y) {

	$('tr').remove();

	for (var i = 1; i<=x; i++){

		$('#pixelCanvas').append('<tr id=table' + i + '></tr>');

		for (var j =1; j<=y; j++){

			$('#table' + i).append('<td></td>');

		}
	}
	$('td').click(function addColor(){
		color = $('#colorPicker').val();

		if ($(this).attr('style')){
			$(this).removeAttr('style')

		}
    else {
		$(this).attr('style','background-color:' + color);
		}
	})

}
