

// let size = height * width;
let submitBtn = document.querySelector('input[type="submit"]');
let table = document.getElementById('pixelCanvas');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Select size input
    let height = parseInt(document.getElementById('inputHeight').value);
    let width = parseInt(document.getElementById('inputWidth').value);
    // Select color input
    let color = document.getElementById('colorPicker').value;
    // When size is submitted by the user, call makeGrid()
    makeGrid(height, width);
})

function makeGrid(height, width) {
    // Your code goes here!
    console.log(height, width);
    let size = height * width;
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < width; j++) {
            row.insertCell(j);
        }
    }


}
