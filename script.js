'use strict'

const container = document.querySelector('.container');
let numRows = prompt('Please enter how many rows you would like in your Etch-a-Sketch (between 1 and 100)');


while (numRows < 1 || numRows > 100) {
  numRows = prompt('Please enter how many rows you would like in your Etch e\' Sketch (between 1 and 100)');
}

const numCells = numRows**2;

const contents = [];
for (let i = 0; i < numCells; i++) {
  contents[i] = document.createElement('div');
  contents[i].classList.add('box');
  contents[i].addEventListener('mouseover', function() {
    contents[i].classList.add('hovered-box');
  });
  container.append(contents[i]);
}

container.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;

