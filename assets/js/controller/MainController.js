app.controller('MainController', function($scope, $rootScope, Diagram, Board) {

    var board = Board.getBoard();
    $scope.alpha = 0;

    board.on("stagemousedown", function(evt) {
        $scope.editPanelObj.visible = false;
        $scope.editElementObj.visible = false;
        $scope.editElementObj.properties = {};
        $rootScope.resizeMode = false;
    });

    $scope.$watch('editElementObj.properties.alpha', function(newValue) {
        if(newValue) {
            $scope.editElementObj.element.setAlpha(newValue);
            $scope.alpha = newValue;
        }
    });

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
