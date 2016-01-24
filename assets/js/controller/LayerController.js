app.controller('LayerController', function($scope, $rootScope, Board) {

    $scope.layers = [];

    $rootScope.boardUpdate = function() {
        $scope.layers = Board.getBoardElements();
    };
});