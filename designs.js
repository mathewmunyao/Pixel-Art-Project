// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
	let height = $("#inputHeight").val();
	let width = $("#inputWidth").val();
	const colorPicker = $("#colorPicker");
	let table = $("#pixelCanvas");
	
	table.children().remove();
	
	for(let i = 0; i < height; i++){
		table.append("<tr></tr>");
		
			for(let j = 0; j < width; j++){
				table.children().last().append("<td></td>");
			}
			}
	table.on("click", "td", function() {
    let color = $("input[type='color']#colorPicker").val();
	
    $(this).attr("bgcolor", color);
  });
	
}


const submitButton = $("input[type='submit']");

submitButton.click(function(event) {
  event.preventDefault();
  makeGrid();
});