const container = document.getElementById('container');
let isBW = 1;
let rainbowbtn = document.querySelector('#rainbow-bw');

makeGrid(16, 16);

rainbowbtn.addEventListener('click', (e) => {
    isBW = 1 - isBW;
    rainbowbtn.textContent = (rainbowbtn.textContent != "Random color") ? "Random color" : "Blue";
});

document.querySelector('#btn').addEventListener('click', (e) => {
    let cells = document.querySelectorAll('.grid-item');
    cells.forEach((cell) => {
        document.querySelector('#container').removeChild(cell);
    });
    let num = prompt('Please input a number to make the new grid  (Default: 16): ', '16');
    while (!(!isNaN(+num) && +num >= 1 && +num <= 100)) {
        num = prompt('Enter a number that is between 1 and 100: ', '16');
    }
    makeGrid(num, num);
});

function fill(e) {
    e.target.style['background-color'] = (isBW) ? 'blue' : `rgb(${Math.floor((Math.random() * 255))},${Math.floor((Math.random() * 255))},${Math.floor((Math.random() * 255))})`;
}

function makeGrid(rows, cols) {
    container.style['grid-template-columns'] = `repeat(${+cols}, 1fr)`;
    container.style['grid-template-rows'] = `repeat(${+rows}, 1fr)`;
    for (i = 0; i < (rows * cols); i++) {
        let cell = document.createElement('div');
        cell.style['backgroundColor'] = 'white';
        cell.addEventListener('mouseenter', fill);
        container.appendChild(cell).className = 'grid-item';
    }
}
