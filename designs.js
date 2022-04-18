// let size = height * width;
let submitBtn = document.querySelector('input[type="submit"]');
let table = document.getElementById('pixelCanvas');

// select color input


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Select size input
    let height = parseInt(document.getElementById('inputHeight').value);
    let width = parseInt(document.getElementById('inputWidth').value);
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
})

function respondToClick(e){
    e.preventDefault();
    let color = document.getElementById('colorPicker').value;
    colorCell(color, e.target)
}

function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
           let cell = row.insertCell(j);
            cell.addEventListener('click', respondToClick)
        }
    }
}

function colorCell(color, cellItem){
    cellItem.style.backgroundColor = color;
}
