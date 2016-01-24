app.service('Board', function($rootScope) {

    this.board = null;

    this.create = function () {
        console.log('init board');
        this.board= new createjs.Stage("board");
        this.board.mouseMoveOutside = true;
        this.board.enableMouseOver(10);
    };

    this.update = function () {
        $rootScope.boardUpdate();
        this.board.update();
    };

    this.getBoard = function () {
      return this.board;
    };

    this.getBoardElements = function () {
        return this.board.children;
    };

    this.addElement = function(element) {
        this.board.addChild(element);
        this.update();
    };

    this.getElement = function(index) {
        return this.board.children[index];
    };

    this.count = function() {
        return this.board.children.length;
    };

    this.removeElement = function(element) {
        this.board.removeChild(element);
        this.update();
    };

    this.setCursor = function(type) {
        this.board.cursor = 'text';
    };

});