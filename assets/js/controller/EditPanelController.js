app.controller('EditPanelController', function($scope, $rootScope, Board) {

    $scope.addLine = function(){
        console.log('addLine');
    };

    $scope.resizeElement = function(){
        $scope.showEditPanel.visible = false;
        $rootScope.resizeMode = true;
        $rootScope.styleResizePanel = {
            left: $scope.showEditPanel.element.x+'px',
            top: $scope.showEditPanel.element.y+'px',
            width: $scope.showEditPanel.element.getWidth()+'px',
            height: $scope.showEditPanel.element.getHeight()+'px'
        };
    };

    $scope.deleteElement = function(){
        $scope.showEditPanel.visible = false;
        Board.removeElement($scope.showEditPanel.element);
    };

    $scope.$watch('showEditPanel.visible', function(newValue) {
        if(newValue) {
            $scope.styleEditPanel = {
                top: $scope.showEditPanel.element.getY()+'px',
                left: $scope.showEditPanel.element.getX()+$scope.showEditPanel.element.getWidth()+'px'
            }
        }
    });

});