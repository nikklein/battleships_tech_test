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
});
