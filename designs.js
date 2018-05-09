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

//This function loads the value of the colour picker and is run on event change via the HTML
function respondToTheClick(evt){
	//Stores the colour selected in the var color
	color = document.getElementById('colorPicker').value;
	//The target sets the indivudal child elements of the table, where we set the overall event listener (rather than created indivudal listenrs)
	evt.target.style.backgroundColor = color;
};

function makeGrid() {

	//This will store the user inputs for row and heights
	inputHeight = document.getElementById('inputHeight').value;
	inputWeight = document.getElementById('inputWeight').value;

	//User inputs come in as strings so this converts them into integars
	inputHeight = parseInt(inputHeight);
	inputWeight = parseInt(inputWeight);

	// For loop will run time until all the rows are created

	for (var i = 0; i < inputHeight; i++ ) {

		
		let newRow = document.createElement("TR"); // this created the rows

		//Nested for loop in the original loop to created the TD within each row

		for (var j = 0; j < inputWeight; j++) {

			let newCols = document.createElement("TD");

			newCols.addEventListener('click', respondToTheClick);
			//append the new TD with each row
			newRow.appendChild(newCols);
		};

		//append the completed grid to the table body

		table.appendChild(newRow);

	};

};


//Here we add the event listender to the table itself, but then set the target via the respondToClick function. Pretty cool¬
table.addEventListener('click', respondToTheClick);
