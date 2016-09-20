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
  it("can place ship horizontally on the board", function() {
    var ship = [1,1,1];
    board.place_ship(0,0,0,0, ship);
    expect(board.board[0]).toEqual([1,1,1,0,0,0,0,0,0,0])
  })
  it("can place ship vertically on the board", function() {
    var ship = [1,1,1];
    board.place_ship(0,0,0,3, ship);
    expect(board.board[0]).toEqual([1,0,0,0,0,0,0,0,0,0])
    expect(board.board[0]).toEqual([1,0,0,0,0,0,0,0,0,0])
    expect(board.board[0]).toEqual([1,0,0,0,0,0,0,0,0,0])
  })
});
