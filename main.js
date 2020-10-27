const container = document.getElementById("container");
//create the button
let button = document.createElement('button');
button.innerHTML = 'Clear Screen';
button.style = "top:0;right:0;position:absolute;z-index: 9999"

//append somewhere

let body = document.getElementsByTagName('body')[0];

body.appendChild(button);



function createGrid(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

createGrid(16, 16);


//add event handler
button.addEventListener('click', function(){
    alert("clear screen!");
    container.remove();
    response = prompt("Please input a number to make the new grid ");
    //alert(response);
    //createGrid(response,response);
    

});
//alert(response);
