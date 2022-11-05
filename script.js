'use strict'

// DOM queries
const container = document.querySelector('.container');
const reset = document.querySelector('.reset');
const input = document.querySelector('.input');
const start = document.querySelector('.start');

// Variables that will change
let contents = [];
let numRows;
let numCells;

// Upon clicking the "Draw" create the board
start.addEventListener('click', function() {
  contents.forEach(content => content.remove());
  contents = [];
  numRows = Number(input.value);

  if (numRows > 100 || numRows < 1) alert('Must be a value between 1 and 100');
  else {
    // Sets total number of cells, gives each cell the box class and places them in the 
    // container div
    numCells = numRows**2;
    for (let i = 0; i < numCells; i++) {
      contents[i] = document.createElement('div');
      contents[i].classList.add('box');
      contents[i].addEventListener('mouseover', function() {
      contents[i].classList.add('hovered-box');
      });
      container.append(contents[i]);
    }

    // Sets number of rows and columns for the grid
    container.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`;
  }

  input.value = '';
})

// Clears the board
reset.addEventListener('click', function() {
  contents.forEach(content => content.classList.remove('hovered-box'));
});




