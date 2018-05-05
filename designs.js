// Select color input
// Select size input

let inputHeight, inputWeight, color;

// When size is submitted by the user, call makeGrid()

//This block disables the page reloading or default submit functionality

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
});


//Setting the default colour as a JS variable onload. Rather than take it from the picker we can defauly to block as it resets to black on apge loads
color = '#000000';
console.log(color);


//This function loads the value of the colour picker and is run on event change via the HTML

function myColour(){
	color = document.getElementById('colorPicker').value;
	console.log(color)
}



function makeGrid() {

	inputHeight = document.getElementById('inputHeight').value;
	inputWeight = document.getElementById('inputWeight').value;

	inputHeight = parseInt(inputHeight);

	inputWeight = parseInt(inputWeight);

	console.log(inputHeight + " " + inputWeight);

}

