// Select color input
// Select size input

let inputHeight, inputWeight, color, table, row, column;

//This will set variables to create the table HTML elements
row = document.createElement("TR");
column = document.createElement("TD");
table = document.getElementById('pixelCanvas');  

// When size is submitted by the user, call makeGrid()

//This block disables the page reloading or default submit functionality

document.getElementById("submit").addEventListener("click", function(event){
    event.preventDefault()
});


//Setting the default colour as a JS variable onload. Rather than take it from the picker we can defauly to block as it resets to black on apge loads
color = '#000000';
console.log(color);


//This function loads the value of the colour picker and is run on event change via the HTML



function makeGrid() {

	//This will store the user inputs for row and heights
	inputHeight = document.getElementById('inputHeight').value;
	inputWeight = document.getElementById('inputWeight').value;

	//User inputs come in as strings so this converts them into integars
	inputHeight = parseInt(inputHeight);
	inputWeight = parseInt(inputWeight);

	console.log(inputHeight + " " + inputWeight);

	//This adds the td to the tr
	row.appendChild(column);

	//This adds the tr to the main table
	table.appendChild(row);


}


//This function will launch onChange of the HTML colour picker
function myColour(){

	//This will store the hex colour value once it has been changed. 
	color = document.getElementById('colorPicker').value;

	//Sets a new var d which selects the table and the rows first element.
	let d = table.getElementsByTagName('tr')[0];

	//This changes the background of the table rows first element to the colour hex picker
	d.style.backgroundColor = color;

	
}
