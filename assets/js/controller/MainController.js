app.controller('MainController', function($scope, $rootScope, Diagram, Board) {

    var board = Board.getBoard();

    board.on("stagemousedown", function(evt) {
        $scope.showEditPanel.visible = false;
        $rootScope.resizeMode = false;
    });

    Diagram.setResize(true, board);

    $scope.fileForm = null;
    $scope.showEditPanel = {};
    $scope.styleEditPanel = {};
    $scope.color = '#000000';

    $scope.addElement = function(type) {
        Diagram.addElement(type);
    };

    $scope.loadDiagram = function () {
        document.getElementById('load-diagram').click();
    };

    $scope.saveDiagram = function () {
        Diagram.saveDiagram();
    };

});
