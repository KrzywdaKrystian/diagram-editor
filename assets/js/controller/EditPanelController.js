app.controller('EditPanelController', function($scope, $rootScope) {

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
        stage.removeChild($scope.showEditPanel.element);
    };

});