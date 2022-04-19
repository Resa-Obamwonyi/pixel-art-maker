let submitBtn = document.querySelector('input[type="submit"]');
let table = document.getElementById('pixelCanvas');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Get all table data items
    let allTableDataItems = document.querySelectorAll('td');
    for (let tableDataItem of allTableDataItems) {
        // if table data item has background color, remove it.
        if (tableDataItem.style.backgroundColor) {
            tableDataItem.style.backgroundColor = null;
        }
    }
    // Select height and width inputs
    let height = parseInt(document.getElementById('inputHeight').value);
    let width = parseInt(document.getElementById('inputWidth').value);
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
})

function respondToClick(e) {
    e.preventDefault();
    // select color input
    let color = document.getElementById('colorPicker').value;
    // call the function to color cell
    colorCell(color, e.target)
}

function makeGrid(height, width) {
    // reset table
    table.innerHTML = null;
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
