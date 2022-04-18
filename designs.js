let submitBtn = document.querySelector('input[type="submit"]');
let table = document.getElementById('pixelCanvas');
console.log("----", table.children);

submitBtn.addEventListener('click', (e) => {
    if (table.children.length === 0) {
        e.preventDefault();
        // Select height and width inputs
        let height = parseInt(document.getElementById('inputHeight').value);
        let width = parseInt(document.getElementById('inputWidth').value);
        // When size is submitted by the user, call makeGrid()
        makeGrid(height, width);
    } else {
        e.preventDefault();
        // let rows = table.rows;
        // for(let i=0; i<rows.length; i++){
        //     rows.item(i).style.backgroundColor = '';
        // }
        table.removeEventListener(e, respondToClick);
    }
})

function respondToClick(e) {
    e.preventDefault();
    // select color input
    let color = document.getElementById('colorPicker').value;
    // call the function to color cell
    colorCell(color, e.target)
}

function makeGrid(height, width) {
    // loop through columns
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        // loop through rows
        for (let j = 0; j < width; j++) {
            let cell = row.insertCell(j);
            // add event listener to single cell block
            cell.addEventListener('click', respondToClick)
        }
    }
}

function colorCell(color, cellItem) {
    // set background color for single table cell
    cellItem.style.backgroundColor = color;
}
