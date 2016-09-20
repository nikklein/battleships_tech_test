function Board() {
  this.board =
  [
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0]
]}

Board.prototype.placeShip = function(a,b,c,d,ship){
  if(b == d){
    this.board[b].splice.apply(this.board[b], [a, ship.length].concat(ship));
  } else {
      for(var i = b; i < d;i++){
        this.board[i].splice(a, 1, ship[0]);
    }
  }
}
var ship1 = [1,1];
var ship2 = [2,2,2];
var ship3 = [3,3,3,3];

// var keys_map = {
//   1:"A",2:"B",3:"C",4:"D",5:"E",
//   6:"F",7:"G",8:"H",9:"I",10:"G"
//  }


 // function createTable(tableData) {
 //   var table = document.createElement('table');
 //   var tableBody = document.createElement('tbody');
 //
 //   tableData.forEach(function(rowData) {
 //     var row = document.createElement('tr');
 //
 //     rowData.forEach(function(cellData) {
 //       var cell = document.createElement('td');
 //       cell.appendChild(document.createTextNode(cellData));
 //       row.appendChild(cell);
 //     });
 //
 //     tableBody.appendChild(row);
 //   });
 //
 //   table.appendChild(tableBody);
 //   document.body.appendChild(table);
 // }
 //
 // createTable(board);
