app.controller('EditPanelController', ['$scope', function($scope) {

    $scope.addLine = function(){
        console.log('addLine');
    };

    $scope.resizeElement = function(){
        console.log('resize');
    };

    $scope.deleteElement = function(){
        $scope.showEditPanel.visible = false;
        stage.removeChild($scope.showEditPanel.element);
    };

}]);