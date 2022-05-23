const sizePicker = document.querySelector('#size-picker');
const table = document.querySelector('#pixel-canvas');

// Default size:
makeGrid(10, 10);

// Submit size:
sizePicker.addEventListener('submit', function (event) {
    event.preventDefault();
    // Clear table first:
    while (table.hasChildNodes()) {
        table.removeChild(table.firstChild);
    }
    // Apply user's size:
    const height = document.querySelector('#input-height');
    const width = document.querySelector('#input-width');
    makeGrid(height.value, width.value);
});

// When size is submitted by the user, call makeGrid():
function makeGrid(height, width) {
    for (let y = 0; y < height; y++) {
        let row = table.insertRow(y);
        for (var x = 0; x < width; x++) {
            let cell = row.insertCell(x);
            // Set cell colors:
            cell.style.backgroundColor = "white";
            cell.addEventListener('click', function (event) {
                event.preventDefault();
                const color = document.querySelector('#color-picker');
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
