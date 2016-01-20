app.controller('MainController', function($scope, $rootScope, Diagram, Board) {

    var board = Board.getBoard();

    board.on("stagemousedown", function(evt) {
        $scope.editPanelObj.visible = false;
        $scope.editElementObj.visible = false;
        $scope.editElementObj.properties = {};
        $rootScope.resizeMode = false;
    });


    $scope.changeX = function(x) {
        console.log($scope.editPanelObj);
        //$rootScope.editPanelObj.element.redraw(x, $rootScope.editElementObj.properties.y, $rootScope.editElementObj.properties.w, $rootScope.editElementObj.properties.h);
    };

    Diagram.setResize(true, board);

    $scope.fileForm = null;
    $scope.editPanelObj = {};
    $scope.editElementObj = {};
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
