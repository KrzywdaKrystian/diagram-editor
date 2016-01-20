app.controller('EditPanelController', function($scope, $rootScope, Board) {

    $scope.addLine = function(){
        console.log('addLine');
    };

    $scope.resizeElement = function(){
        $scope.editPanelObj.visible = false;
        $rootScope.resizeMode = true;
        $rootScope.styleResizePanel = {
            left: $scope.editPanelObj.element.x+'px',
            top: $scope.editPanelObj.element.y+'px',
            width: $scope.editPanelObj.element.getWidth()+'px',
            height: $scope.editPanelObj.element.getHeight()+'px'
        };
    };

    $scope.deleteElement = function(){
        $scope.editPanelObj.visible = false;
        Board.removeElement($scope.editPanelObj.element);
    };

    $scope.$watch('editPanelObj.visible', function(newValue) {
        if(newValue) {
            $scope.styleEditPanel = {
                top: $scope.editPanelObj.element.getY()+'px',
                left: $scope.editPanelObj.element.getX()+$scope.editPanelObj.element.getWidth()+'px'
            }
        }
    });

});