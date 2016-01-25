app.controller('LayerController', function($scope, $rootScope, Board) {

    $scope.layers = [];

    $rootScope.boardUpdate = function() {
        $scope.layers = Board.getBoardElements();
    };

    $scope.setVisible = function(index, val) {
        Board.setVisible(index, val);
    };

    $scope.remove = function(element) {
        Board.removeElement(element);
    };

});