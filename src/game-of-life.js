function GameOfLife (array, grid, lifeStatus, neighbors){
  this.array = array;
  this.grid = grid;
  this.lifeStatus = false;
  this.neighbors = neighbors;
  }

    function Grid (cells, rows, cols){
      this.cells = [];
      this.rows = 
      this.cols = 
  }

    function Cell (lifeStatus) {
      this.lifeStatus = false;
    }

    //$("#cell").click(function () {
      //this.lifeStatus = !this.lifeStatus
    //let newCell = new Cell(lifeStatus)


GameOfLife.prototype.checkCellOn = function() {
  if (this.lifeStatus === true){
    checkNeighbourCells()
  }
}

GameOfLife.prototype.checkNeighbourCells() = function() {
  if (neighbor < 2 || neighbor > 3) {
  dead }
  else if (neighbor === 3)
  }

  function getNeighbors(row, col) {
    let neighbors = 0;
    if (grid[row-1],[col] === alive) neighbors++;
    if (grid[row],[col-1] === alive) neighbors++;




    return neighbors;
  }