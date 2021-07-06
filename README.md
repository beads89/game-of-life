Grid 26x26
cell on/off
checkCellOn
checkCellOff
checkNeighborCell

/*
 Conway's - Game of Life.
 Any live cell with fewer than two live neighbours dies, as if caused by under-population.
 Any live cell with two or three live neighbours lives on to the next generation.
 Any live cell with more than three live neighbours dies, as if by over-population.
 Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
 */

if aliveCell neighbor < 2 or > 3 it dies

if deadCell neighbor === 3 it lives

if aliveCell === 2 || === 3 it lives

neighborCells(row, col) {

}

check neighbors by using axis positions x,y (ex: xPosition -1, yPosition -1 checks position 7 on below grid to see if it's alive or dead, etc., etc.) (1,2)
1 2 3
4[5]6
7 8 9

class whatever 

constructor (base, x, y, cells)
  this.base = base;
  this.x = x;
  this.y = y;
  this.cells = alive;





ifCellAlone

ifCell === 3 "survives"

startGrid (aliveCells) {
  const rowCount = 26
  const colCount = 26

  for (let i = 0; i < rowNumber; i++) {
    let row = []

    for (let j = 0; j < colCount; j++>)

  }

function createArray (rows) {
    var arr = [];
  for (var i = 0; i < rows; i++) {
      arr[i] = [];
    }
    return arr;
  }


b2 [a1, b1, a2, a3, c1, c2, c3, b3]

let rowBla = 

1 2 3
4[5]6
7 8 9

2
3
4
5 [1, 2, 3, 4, 6, 7, 8 ,9]

function GameOfLife (){
this.array = this.array;
this.cell = this.cell;
this.grid = this.grid;
this.cellStatus = false;
}



if (neighbor < 2 || neighbor > 3) {
  dead }
  else if (neighbor === 3)


}

GameOfLife.prototype.checkCellOn = function() {
  if (cell === on){
    this.life = true;
    checkNeighbourCells()
  }
}

 GameOfLife.prototype.checkNeighbourCells() = function() {
   if (neighbor < 2 || neighbor > 3) {
  dead }
  else if (neighbor === 3)
 }

<class="cell" date-cell>
display: grid; 
grid-template: repeat







Co-authored-by: Kristen Hopper <hopperdavis@gmail.com>
Co-authored-by: Masha Ivy <mashaivy9l@gmail.com>
Co-authored-by: Kody Gordon <gordon.km89@gmail.com>
Co-authored-by: Brandon Eads <brandon181989@hotmail.com>

# (Application Name)

#### (Brief Description of Application)

#### By (Your Name Here)

## Technologies Used

* _List all_
* _the major technologies_
* _you used in your project_
* _here_

## Description

## Setup/Installation Requirements

* _This is a great place_
* _to list setup instructions_
* _in a simple_
* _easy-to-understand_
* _format_

## Known Bugs

* _Any known issues_
* _should go here_

## License

## Contact Information