describe("Board", function() {
  var board;

  beforeEach(function() {
    board = new Board();
  });

  it("has 10 rows", function() {
    expect(board.board.length).toEqual(10);
  })
  it("has 10 elements within each row", function() {
    for(var i = 0;i<board.board.length;i++){
      expect(board.board[i].length).toEqual(10);
    }
  })

  describe('placeShip', function() {
    it("can place a ship horizontally on the board", function() {
      var ship = [1,1,1];
      board.placeShip(0,0,0,0, ship);
      expect(board.board[0]).toEqual([1,1,1,0,0,0,0,0,0,0])
    })
    it("can place a ship vertically on the board", function() {
      var ship = [1,1,1];
      board.placeShip(0,0,0,3, ship);
      expect(board.board[0]).toEqual([1,0,0,0,0,0,0,0,0,0])
      expect(board.board[0]).toEqual([1,0,0,0,0,0,0,0,0,0])
      expect(board.board[0]).toEqual([1,0,0,0,0,0,0,0,0,0])
    })

    it("should throw an error if one ship overlaps another one", function() {
      var ship = [1,1,1];
      var ship2 = [2,2,2];
      board.placeShip(0,0,3,0, ship);
      expect(function() { board.placeShip(0,0,3,0, ship2)} ).toThrowError("Can't place a ship");
      });
  });
});
