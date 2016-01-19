app.service('Board', function() {

    this.board = null;

    this.create = function () {
        console.log('init board');
        this.board= new createjs.Stage("board");
        this.board.mouseMoveOutside = true;
        this.board.enableMouseOver(10);
    };

    this.update = function () {
        this.board.update();
    };

    this.getBoard = function () {
      return this.board;
    };

    this.getBoardElements = function () {
        console.log(this.board.children);
        return this.board.children;
    };

    this.addElement = function(element) {
        this.board.addChild(element);
        this.update();
    };

    this.removeElement = function(element) {
        this.board.removeChild(element);
        this.update();
    };

});